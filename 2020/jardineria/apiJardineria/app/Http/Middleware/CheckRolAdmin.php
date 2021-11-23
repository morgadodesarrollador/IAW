<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRolAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user = auth()->user();
        if ($user['rol']=='administrador'){
            return $next($request);
        }
        return response()->json([
            'message' => 'no ea admin'], 201);
    }
}
