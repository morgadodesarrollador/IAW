
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\GamasProdutosController;


Route::group(['middleware' => 'auth:api'], function () {
    Route::get('admin/gamas', [GamasProdutosController::class, 'index']);
    Route::get('admin/gamas/{id}/productos', [GamasProdutosController::class,'getProductos']);
});
