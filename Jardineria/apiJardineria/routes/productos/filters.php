
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\filters\ProductosController;


Route::post('productos/filters', [ProductosController::class, 'filtros']);

