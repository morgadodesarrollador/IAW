
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\ProdutosController;


Route::group(['middleware' => 'auth:api'], function () {
    Route::get('admin/productos', [ProdutosController::class,'index']);
    Route::get('admin/productos/{producto}', [ProdutosController::class,'show']);
    Route::group(['middleware' => 'rol.admin'], function () {
        Route::post('admin/productos', [ProdutosController::class,'store']);
        Route::put('admin/productos/{producto}', [ProdutosController::class,'update']);
        Route::delete('admin/productos/{producto}', [ProdutosController::class,'destroy']);
    });
});


//Route::resource('admin/productos', ProdutosController::class);
