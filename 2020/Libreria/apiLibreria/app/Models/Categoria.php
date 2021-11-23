<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $table = 'categorias';
    protected $primarykey = 'categoriaid';
    protected $fillable = ['nombre_categoria','created_at','updated_at'];

    public function libros() {
        return $this->hasMany(Libro::class,'categoriaid', 'categoriaid');
    }
}
