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

        $request->validate([
            'user_id'  => 'required|integer',
            'name'     => 'required|string',
            'surname'  => 'required|string',
            'rol'      => 'required|string',
            'email'    => 'required|string',
            'password' => 'required|string',
            'image'    => 'required|string',
        ]);

        $user = new User([
            'user_id'  => $request->user_id,
            'name'     => $request->name,
            'surname'  => $request->surname,
            'rol'      => $request->rol,
            'email'    => $request->email,
            'password' => bcrypt($request->password),
            'image'    => $request->image,
        ]);
        $user->save();
        return response()->json([
            'message' => 'Successfully created user!'], 201);

    }

    public function signup(Request $request)
    {

        $validator = Validator::make(request()->input(),[
            'user_id'  => 'required',
            'rol'      => 'required',
            'name'     => 'required',
            'surname'  => 'required',
            'email'    => 'required',
            'password' => 'required',
            'image'    => 'required',
        ]);

        if ($validator->fails()){
            return response()->json(['error'=> $validator->errors()], 401);
        }

        request()->merge(['password' => bcrypt(request('password'))]);
        $user = User::create(request()->input());
        $success['token']=$user
            ->createToken('task api', [''])
            ->accessToken;

        return response()->json($success);

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

        //validamos el  email/pasword que viene del password
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);
        //verificar las credenciales --> ['email => $email, 'password'=>$password] con el método Auth::attemp
        $credentials = request(['email', 'password']);
        //si las credenciales no son válidas se devuelve un mensaje de error
        if(!Auth::attempt($credentials)){
            return response()->json([
                'message' => 'Credenciales Incorrectas', 'code' => 401
            ]);
        }
        //las credenciales son válidad y se saca el usuario (registro de la tabla usuario)
        $user = Auth::user();
        //  $user = $request->user();
      //  dd($user);

        // una vez que el usuario se ha logeado generamos el TOKEN que posteriormente el usuario usará para acceder
        // a nuestra REST API

        //dd($user);
        $tokenAuth = $user->createToken('Personal Access Token');
        $token = $tokenAuth->accessToken;
        $tokenAuth->token->user_id = $user['user_id'];
        $tokenAuth->token->save();
        dd ($tokenAuth);
        //generar el token para el usuario
        //el usuario autenticado se guarda en el request

        //datos necesarios para que el usuario realize las consultas porsteriores a la REST API
       return response()->json([
           'access_token' => $token,
           'token_type' => 'Bearer ',
           'expires_at' => Carbon::parse($tokenAuth->token->expires_at)->toDateTimeString()
       ]);

    }
}
