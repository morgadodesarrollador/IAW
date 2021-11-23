<?php

namespace App\Http\Controllers\admin;

use App\Models\Editor;
use Illuminate\Http\Request;
//importamos el MODELO
use App\Http\Controllers\Controller;
use App\Http\Requests\storeEditorPost;
use Illuminate\Support\Facades\Input;

class EditorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function libros($id){
    //    echo "-->". $id;
        $editores = Editor::with('libros')->get();
        return  response()->json($editores);
    }

    public function index(Request $request)
    {
        $editores = Editor::all();

        return  response()->json($editores);
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
    //en el método store inyectamos el objeto  storeEditorPost (parámetro)
    public function store(storeEditorPost $request)
    {
        //echo "store";
        $datos = $request->validated(); //NOS DEVUELVE LOS DATOS QUE HA VALIDADO
       // var_dump($datos);
        if ($datos){
            Editor::create($datos);
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
        echo "mostrar". $id;
      //  $editor = Editor::find($id);
        $editor = Editor::where('editorid', $id)->first()->nombre_editorial;
      //  $nombre_ed = Editor::find(1)->nombre_editorial;
        return  response()->json($editor);

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
