<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Peliculas2Controller;

class ClientesController extends Controller
{
    //
    public function index(){

        //El Controlador envía la petición SQL al MODELO /SELECT * From animales

        //El Controlador recibe los datos del MODELO (base de datos)
        $animales = array (
            "gato" => "Sunny",
            "perro" => "Stoichkov",
            "chimpancé" => "Muggles",
            "chinchilla" => "Herminia",
            "Charles" => "Cadastro",
            "oso" => "Tarzan"
        );
        
        //return json ($datos);
        
        //El Controlador envía los DATOS a la VISTA para que los procese y genere el HTML
        return view ('clientes/index', array('clientes' => $animales));



      /*  $p = new Peliculas2Controller();
        $p->index();
        echo "--------------------<br>";
        $p->create();
        */
        
    }

    public function create(){
      //º  return json ($datos);
        
        return view ('clientes/create');
    }
}
