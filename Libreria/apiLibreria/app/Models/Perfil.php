<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    use HasFactory;
    protected $table = 'perfiles';
    protected $primarykey = 'libro_id';
    protected $fillable = [
        'perfilid', 'email', 'facebook', 'instagram', 'foto', 'rol'];
}
