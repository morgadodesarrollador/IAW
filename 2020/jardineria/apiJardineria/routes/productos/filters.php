
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\filters\ProductosController;


Route::post('productos/filters', [ProductosController::class, 'filtros']);
Route::get('productos/GyP', [ProductosController::class, 'getGamasProveedores']);
/*
Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'rol.admin'], function () {
    }
};
*/

