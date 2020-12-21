<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuarios';
    protected $primarykey = 'userid';
    protected $fillable = [
        'userid', 'login', 'paSS', 'nombre', 'apellidos'];

    public function perfil() {
            return $this->hasMany(Perfil::class,'perfilid', 'perfil');
    }
}
