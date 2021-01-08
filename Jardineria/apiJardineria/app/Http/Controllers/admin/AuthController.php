<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function signup1(Request $request)
    {
        #Paso1-. Validación de los campos del usuario
        $request->validate([
            'user_id'  => 'required|integer',
            'name'     => 'required|string',
            'surname'  => 'required|string',
            'rol'      => 'required|string',
            'email'    => 'required|string',
            'password' => 'required|string',
            'image'    => 'required|string',
        ]);
        #Paso2

        #Paso3-. Creamos  en la BD el objeto usuario con los campos que vienen en la Request
        $user = new User([
            'user_id'  => $request->user_id,
            'name'     => $request->name,
            'surname'  => $request->surname,
            'rol'      => $request->rol,
            'email'    => $request->email,
            'password' => bcrypt($request->password), // encriptamos la contraseña
            'image'    => $request->image,
        ]);
        #Paso4-. Almacenamos el usuario en la tabla User
        $user->save();

        #Paso5-. Devolvemos la respuesta con un mensaje
        return response()->json([
            'message' => 'Successfully created user!'], 201);

    }

    public function signup(Request $request)
    {
        #Paso1-. Validación de los campos del usuario
        $validator = Validator::make(request()->input(),[
            'user_id'  => 'required',
            'rol'      => 'required',
            'name'     => 'required',
            'surname'  => 'required',
            'email'    => 'required',
            'password' => 'required',
            'image'    => 'required',
        ]);

        #Paso2-. Se devuelven como errores los campos que no verifique los requisitos
        if ($validator->fails()){
            return response()->json(['error'=> $validator->errors()], 401);
        }

        #Paso3-. Los datos son correctos, encriptamos la contraseña
        request()->merge(['password' => bcrypt(request('password'))]);

        #Paso4-. Creamos y almacenamos en la BD el objeto usuario con los campos que vienen en la Request
        $user = User::create(request()->input());

        #Paso5-. Podemos devolver el token de ese usuario
        $success['token']=$user
            ->createToken('task api', [''])
            ->accessToken;

        #return response()->json($success);

        #Paso5-.Devolvemos un mensaje de usuario creado
        return response()->json([
            'message' => 'Successfully created user!'], 201);

    }

    public function login1(){
        echo "login";
        if (auth()->attempt(request()->input())){
            $user = auth()->user();
            $success['token']=$user
                ->createToken('Passport api')
                ->accessToken;

            return response()->json($success, 200);
        }else{
            return response()->json(['error'=> 'Unatohorized'], 401);
        }
    }

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
                'message' => 'Credenciales Incorrectas', 'code' => 401
            ]);
        }

        #Paso4-. Las credenciales son válidas y se saca el usuario (registro de la tabla usuario)
        #con el email/password que viene de la request
        $user = Auth::user();
        //  $user = $request->user();
        //  dd($user);

        #Paso5-. Generar el TOKEN del usuario
        # una vez que el usuario se ha logeado generamos el TOKEN que posteriormente el usuario usará para acceder
        # a nuestra REST API
        $tokenAuth = $user->createToken('Personal Access Token');
        //dd ($tokenAuth);
        $token = $tokenAuth->accessToken;
        #asociamos el user_id del token al user_id del usuario logeado
        $tokenAuth->token->user_id = $user['user_id'];
        #almacenamos el token en la tabla oauth_access_tokens
        $tokenAuth->token->save();

        #Paso6-. Generar el token y las características necesarias para el usuario
        # datos necesarios para que el usuario realize las consultas porsteriores a la REST API

       return response()->json([
           'access_token' => $token,
           'token_type' => 'Bearer ',
           'expires_at' => Carbon::parse($tokenAuth->token->expires_at)->toDateTimeString()
       ]);

    }
}
