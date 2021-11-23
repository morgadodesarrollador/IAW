
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\filters\EditorController;


Route::get('admin/editor/{id}/libros', [EditorController::class,'libros']);
