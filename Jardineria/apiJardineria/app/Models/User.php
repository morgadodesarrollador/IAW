<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use HasFactory, Notifiable;
    use HasApiTokens;
    protected $table = 'users';
    protected $primarykey = 'user_id';
    protected $fillable = [
      'user_id', 'rol','name','surname', 'email', 'password', 'image'
    ];
    public function cliente(){
        //foranea de cliente, primaria de usuario
        return $this->hasOne(cliente::class, 'userid', 'user_id');
    }
}
