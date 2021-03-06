<?php

use App\Http\Controllers\admin\GamasProdutosController;
use App\Http\Controllers\admin\ProdutosController;
use App\Http\Controllers\admin\UsuariosController;
use App\Http\Controllers\admin\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Route::resource('admin/gamas', GamasProdutosController::class);
Route::resource('admin/usuarios', UsuariosController::class);

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'signup']);
/*
Route::get('user', [AuthController::class, 'getUser'])
    ->middleware('auth:api');

Route::post('logout', [AuthController::class, 'logout'])
    ->middleware('auth:api');
*/
Route::post('gamas', [GamasProdutosController::class, 'gamas']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'getUser']);

  //  Route::get('admin/gamas', [GamasProdutosController::class, 'index']);
  //  Route::get('admin/gamas/productos', [GamasProdutosController::class,'getProductos']);

});


