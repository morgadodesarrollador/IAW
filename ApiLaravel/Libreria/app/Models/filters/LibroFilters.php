<?php

namespace App\Models\fiters;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Libro;
use Illuminate\Support\Facades\DB;

class LibroFilters extends Libro
{
    public static function porPrecio($precio){
        echo "libros";
        $libros = DB::table('libros')
        ->select('*')
        ->where('precio', '>', $precio)
        ->get();
        return $libros;
    }
}




