<?php

namespace App\Http\Controllers;

use App\Models\Libro;
use Illuminate\Http\Request;

class LibroController extends Controller
{


    public function index(Request $request ){
        $libros = Libro::with('editor','categoria')
            ->get(['nombrelibro', 'editorid', 'precio']);

        $precio = $request->input('precio');
        $operador = $request->input('op');

        $libros = Libro::porPrecio($precio, $operador);
        $libros = Libro::all();

      //  return view('libros/listar', array('libros' => $libros));
        return response()->json($libros);
    }

    public function index3(Request $request )
    {

        //$parametros = $request->input();
        $codEd= $request->input('codEd');
        $codCat= $request->input('codCat');

        $libros = Libro::
            select(['nombrelibro', 'libros.editorid', 'nombreeditorial','precio', 'nombrecategoria'])->
            join('editores', 'editores.editorid', '=', 'libros.editorid')->
            join('categorias', 'categorias.categoriaid', '=', 'libros.categoriaid')->
            where('libros.editorid', '=', $codEd)->
            where('libros.categoriaid', '=', $codCat)->
            orderBy('precio', 'desc')->
            get();



        //modificar $libros
       return view('libros/listar', array('libros' => $libros));
      // return  response()->json($libros);



    }
    public function index2(Request $request )
    {

        //$parametros = $request->input();
        $id= $request->input('codigo');
        $libros = Libro::where('editorid', $id)->
                         where('precio','>', 25)->
                         get(['nombrelibro', 'editorid', 'precio']);
        //modificar $libros
       // return view('libros/listar', array('libros' => $libros));
       return  response()->json($libros);



    }
    public function index1(Request $request, $id=0, $nombre='' )
    {

        echo "Listado de Libros de la editorial $id - $nombre <p>";
        $parametros = $request->input();
        //dd($parametros);
        $codigo= $request->input('codigo');
        $name= $request->input('name');
        echo $codigo. " ". $name. " ". $parametros['codigo']. " ". $parametros['name'];
        echo "<br>*****************************";
      //  $query = $request->query();
      //  dd($query);



    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Libro  $libro
     * @return \Illuminate\Http\Response
     */
    public function show(Libro $libro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Libro  $libro
     * @return \Illuminate\Http\Response
     */
    public function edit(Libro $libro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Libro  $libro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Libro $libro)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Libro  $libro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Libro $libro)
    {
        //
    }
}
