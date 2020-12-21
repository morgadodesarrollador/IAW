<?php

namespace App\Models;
use App\Models\fiters\LibroFilters;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Libro extends Model
{
    use HasFactory;
    protected $table = 'libros';
    protected $primarykey = 'libro_id';
    protected $fillable = [
        'libro_id',
        'nombre_libro',
        'descripcion',
        'categoriaid',
        'editorid',
        'precio',
        'entrega',
        'imagen',
        'created_at',
        'updated_at'];

    //un libro pertenece a un unico editor
    public function editor(){
                    //clave foránea, clave local
        return $this->belongsTo(Editor::class,'editorid', 'editorid');
      //  return $this->hasOne(Editor::class,'editorid', 'editorid');

    }
    public function categoria(){
        //clave foránea, clave local
        return $this->belongsTo(Categoria::class,'categoriaid', 'categoriaid');
    }

    public static function porPrecio($precio){
        $libros = DB::table('libros')
        ->select('*')
        ->where('precio', '>', $precio)
        ->get();
        return $libros;
    }

}
