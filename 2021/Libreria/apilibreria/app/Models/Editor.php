<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Editor extends Model
{
    use HasFactory;
    protected $table = 'editores';
    protected $primarykey = 'editorid';
    protected $fillable = ['nombreeditorial','created_at','updated_at'];

    public function libros() { //campo extra ‘libros’ del modelo Editor
        //devuelve los ‘libros’ de ‘ese editor’
    // 1 Editor tiene Muchos Libros
        return $this->hasMany(Libro::class,'editorid', 'editorid');
    }
}
