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
Route::resource('admin/productos', ProdutosController::class);
Route::resource('admin/gamas', GamasProdutosController::class);
Route::resource('admin/usuarios', UsuariosController::class);

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'signup']);


