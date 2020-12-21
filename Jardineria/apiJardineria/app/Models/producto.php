<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class producto extends Model
{
    use HasFactory;
    protected $table = 'jamproductos';
    protected $primarykey = 'CodigoProducto';

    public function migama(){
        return $this->belongsTo(gama::class, 'Gama','Gama');
    }
}
