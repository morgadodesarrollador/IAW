<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\LibroController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\Admin\AuthController;


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
Route::post('register', [AuthController::class, 'signup']);
Route::post('login', [AuthController::class, 'login']);

Route::post('logout', [AuthController::class, 'logout'])
        ->middleware('auth:api');



//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

//Route::resource('admin/editor', EditorController::class);
//Route::get('/', [LibroController::class, 'index']);

//Route::get('admin/libros', [LibroController::class, 'index']);

//Route::get('admin/libros/{id?}/{nombre?}', [LibroController::class, 'index']);



//Route::resource('admin/libros', LibroController::class);
//Route::resource('admin/categorias', CategoriaController::class);
