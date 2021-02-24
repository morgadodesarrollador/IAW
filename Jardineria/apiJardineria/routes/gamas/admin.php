
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\GamasProdutosController;


Route::group(['middleware' => 'auth:api'], function () {
 //   Route::post('admin/gamas/new', [GamasProdutosController::class, 'store']);
    Route::get('admin/gamas', [GamasProdutosController::class, 'index']);
    Route::get('admin/gamas/{id}/productos', [GamasProdutosController::class,'getProductos']);
});
Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'rol.admin'], function () {
        Route::post('admin/gamas/new', [GamasProdutosController::class, 'store']);
    });
});
