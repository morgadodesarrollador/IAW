<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\gama;
use App\Models\producto;
use Illuminate\Http\Request;


class GamasProdutosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getProductos($id){
        $productos1 = Gama::with('productos')->where('Gama', '=', $id)->get();
        $productos = producto::select("*")
                                ->where('Gama', $id)
                                ->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Productos de la Gama '. $id ,
            'code' => 401,
            'data' => $productos
        ]);
    }

    public function index()
    {
       // $gamas = gama::with('productos')->get();
        $gamas = gama::all();
        return  response()->json([
            'status' => 'success',
            'message' => 'Gamas de la Jardinería',
            'code' => 401,
            'data' => $gamas
        ]);
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
        echo "nueva categoria";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
