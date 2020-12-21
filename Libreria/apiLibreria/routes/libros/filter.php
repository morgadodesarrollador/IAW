
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\filters\LibrosController;


Route::get('admin/libros/precio', [LibrosController::class,'precio']);
