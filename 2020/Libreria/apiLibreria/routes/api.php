<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\EditorController;
use App\Http\Controllers\admin\LibrosController;
use App\Http\Controllers\admin\CategoriasController;


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

Route::resource('admin/editor', EditorController::class);
//Route::resource('admin/editor', 'admin/EditorController');
Route::resource('admin/libros', LibrosController::class);

Route::resource('admin/categorias', CategoriasController::class);



