<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Carbon\Carbon;

use Illuminate\Http\Response;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function login(Request $request){

         #Paso1-. validamos el  email/pasword que viene del password
         $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        #Paso2-. Creamos el array de credenciales --> ['email => $email, 'password'=>$password] con el método Auth::attemp
        $credentials = request(['email', 'password']);

        #Paso3-. Verificamos si las credenciales no son válidas se devuelve un mensaje de error
        #se chequea en la tabla User sis existe el email/password
        if(!Auth::attempt($credentials)){
            return response()->json([
                'status' => 'error',
                'message' => 'Credenciales Incorrectas', 'code' => 401
          ]);
        }
        #Paso4-. Las credenciales son válidas y se saca el usuario (registro de la tabla usuario)
        #con el email/password que viene de la request
        $user = $request->user();
      //  $user = Auth::user();
        #Paso5-. Generar el TOKEN del usuario
        # una vez que el usuario se ha logeado generamos el TOKEN que posteriormente el usuario usará para acceder
        # a nuestra REST API

        $tokenAuth = $user->createToken('Personal Access Token');
        $token = $tokenAuth->accessToken;
        #asociamos el user_id del token al user_id del usuario logeado
        $tokenAuth->token->user_id = $user['id'];
        #Por defecto la vigencia del token es de un año.
        #En este caso añadimos 1 semana mas a la vigencia del token después del logeo
        $tokenAuth->token->expires_at = Carbon::now()->addWeeks(1);
        #almacenamos el token en la tabla oauth_access_tokens
        $tokenAuth->token->save();

        return response()->json([
            'status' => 'success',
            'token' => [
                 'token' => $tokenAuth,
                 'access_token' => $token,
                 'token_type' => 'Bearer ',
                 'expires_at' => Carbon::parse($tokenAuth->token->expires_at)->toDateTimeString()
            ]
        ]);


    }
    //
    public function signup(Request $request){

        $rules = [
            'id'       => 'required|integer',
            'nombre'     => 'required',
            'email'    => 'required',
            'ciudad'       => 'required',
            'rol'      => 'required',
            'password' => 'required',
            'image'    => 'required',
        ];
        #Paso1-. Validación de los campos del usuario
        $input = $request->all();
        $validator = Validator::make($input, $rules);
        if ($validator->fails()){
            return response()->json([
                'status' => 'error',
                'message' => 'Error en la validación de los datos',
                'errors'=> $validator->errors()
            ], 200);
        }


      //  $user = User::create(array(
        $user = User::create(array(
            'id'       => $request->input('id'),
            'rol'      => $request->input('rol'),
            'nombre'     => $request->input('nombre'),
            'ciudad'  => $request->input('ciudad'),
            'email'    => $request->input('email'),
            'password' => bcrypt($request->password),
            'image'    => $request->input('image')
        ));
        $user->save();
        #Paso5-. Creamos el token y lo almacenamos en oauth_access_tokens
        $tokenAuth = $user->createToken('Personal Access Token');
        $token = $tokenAuth->accessToken;
        $tokenAuth->token->user_id = $request->input('id');
        $tokenAuth->token->save();
        return response()->json([
            'status' => 'success',
            'data' =>  $tokenAuth,
            'message' => 'Successfully created user! '], 201);


    }
}
