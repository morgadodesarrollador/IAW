<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuario extends Model
{
    use HasFactory;
    protected $table = 'jamusers';
    protected $primarykey = 'id';

    public function cliente(){
        //foranea de cliente, primaria de usuario
        return $this->hasOne(cliente::class, 'userid', 'id');
    }
}
