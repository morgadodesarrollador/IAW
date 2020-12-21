<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class gama extends Model
{
    use HasFactory;
    protected $table = 'jamgamasproductos';
    protected $primarykey = 'Gama';

    public function productos(){
        return $this->hasMany(producto::class, 'Gama', 'Gama');
    }
}
