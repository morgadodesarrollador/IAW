<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->string('CodigoProducto', 15)->primary();
            $table->string('Nombre', 70);
            $table->string('Gama',50);
            $table->string('Proveedor',50);
            $table->longText('Descripcion');
            $table->smallInteger('CantidadEnStock');
            $table->string('imagen',20);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
