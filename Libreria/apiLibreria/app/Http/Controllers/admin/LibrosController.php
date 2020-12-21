<?php

namespace App\Http\Controllers\admin;
use App\Models\Libro;
use App\Http\Controllers\Controller;
use App\Http\Requests\storeLibro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LibrosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function precio(Request $request){
        echo "precio";
        $precio = $request->input('precio');
        echo $precio;

        $libros = DB::table('libros')
                     ->select('*')
                     ->where('precio', '>', $precio)
                     ->get();
        return  response()->json($libros);
    }


    public function index()
    {

      
     // $libros = Libro::with('editor')->with('categoria')
     //       ->select('libro_id','nombre_libro','precio', 'editor.nombre_editorial')->get();
     /*
        $libros = Libro::
            join('editores', 'editores.editorid','=','libros.editorid')
            ->join('categorias','categorias.categoriaid','=', 'libros.categoriaid')
            ->orderBy('libros.precio','asc')
            ->select('libros.libro_id','libros.nombre_libro','libros.precio', 'editores.nombre_editorial','categorias.nombre_categoria')->get();
        */
        //$libros = Libro::all();
        //devuelve los datos del Libro + campos de su editor + campos de su categoria
        $libros = Libro::with('editor')->with('categoria')->get();

        return  response()->json($libros);

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        echo "Crear un formulario de Libros...";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeLibro $request)
    {

        $datos = $request->validated();
        var_dump($datos);
        if ($datos){
            Libro::create($datos);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        echo "Listar un LIBRO";
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
