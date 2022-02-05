<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PeliculasController extends Controller
{
    private $precio = 10;
    protected $comision = 5;
    
    //
    public function index(){
        echo "Lista de Películas";
        $this->total();
    
    }

    protected function create(){
        echo "Alta de una nueva Película<br>";
    }

    private function total(){
        echo "cáluclo del total ...";
        $this->precio = $this->precio * 2;
    }
}
