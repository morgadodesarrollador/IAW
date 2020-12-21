<?php

namespace App\Models;
use App\Models\Libro;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Editor extends Model
{
    use HasFactory;
    //nombre de la tabla si no deseamos el conveccionalisrmo.
    //nuestro Modelo es Editor, la tabla sería Editors (no existe)
    protected $table = 'editores';
    protected $primarykey = 'editorid';
    protected $fillable = ['nombre_editorial','created_at','updated_at'];

    public function libros() {
        return $this->hasMany(Libro::class,'editorid', 'editorid');
    }
}
