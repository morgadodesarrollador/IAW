<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\PeliculasController;

class Peliculas2Controller extends PeliculasController {

    public function index() {
        echo "index de peliculas2<br>";
        $this->create();
    }
}
