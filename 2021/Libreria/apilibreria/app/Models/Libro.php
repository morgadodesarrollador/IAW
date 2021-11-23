<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Libro extends Model
{
    use HasFactory;

    public function editor(){
        return $this->belongsTo(Editor::class, 'editorid', 'editorid');
    }

    public function categoria(){
        return $this->belongsTo(Categoria::class, 'categoriaid', 'categoriaid');
    }

    public static function porPrecio($precio, $operador){
        $libros = DB::table('libros')
        ->select('*')
        ->where('precio', $operador, $precio)
        ->toSql();
        return $libros;
    }


}
