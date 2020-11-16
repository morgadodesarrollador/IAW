<?php

namespace App\Http\Controllers\admin\filters;
use App\Models\Libro;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class LibrosController extends Controller
{
    public function precio(Request $request){
        $precio = $request->input('precio');

        $libros = Libro::porPrecio($precio);
        return  response()->json($libros);
    }
}
