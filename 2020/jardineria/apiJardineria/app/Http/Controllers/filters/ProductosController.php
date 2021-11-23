<?php

namespace App\Http\Controllers\filters;
use App\Models\producto;
use App\Models\gama;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductosController extends Controller
{
    public function filtros(Request $request) {
       // $gamas = json_decode($request->input('data'));
        $data = json_decode($request->input('data'), true);
        $precios = $data['precios'];
        $gamas = $data['gamas'];
        $productos = producto::select("*")
                                ->whereIn('Gama', $gamas)
                                ->where('PrecioVenta', '>', $precios[0])
                                ->where('PrecioVenta', '<', $precios[1])
                                ->get();
        return  response()->json([
        'status' => 'success',
        'message' => 'Productos filtrados' ,
        'data' => $productos,
        'code' => 401,
        ]);
    }

    public function getGamasProveedores(){

        $gamas = gama::select("Gama")->get();
        $proveedores = producto::select("Proveedor")->distinct()->get();
        $data = array('gamas'=>$gamas, 'proveedores'=>$proveedores);
        return  response()->json([
            'status' => 'success',
            'message' => 'Gamas y Proveedores' ,
            'data' => $data,
            'code' => 401,
            ]);
    }
}
