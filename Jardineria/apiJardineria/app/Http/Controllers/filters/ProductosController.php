<?php

namespace App\Http\Controllers\filters;
use App\Models\producto;

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
}
