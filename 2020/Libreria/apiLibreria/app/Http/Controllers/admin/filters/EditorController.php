<?php

namespace App\Http\Controllers\admin\filters;

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
        //echo "-->". $id;
        $editores = Editor::with('libros')->where('editorid', '=', $id)->get();
        return  response()->json($editores);
    }

}
