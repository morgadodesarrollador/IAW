<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDireccionToClientes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clientes', function (Blueprint $table) {
            $table->string('Direccion',50)->after('LimiteCredito');
            $table->string('Ciudad',50)->after('Direccion');
            $table->string('Pais',50)->after('Ciudad');
            $table->string('CodigoPostal',10)->after('Pais');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clientes', function (Blueprint $table) {
            $table->dropColumn('Direccion');
            $table->dropColumn('Ciudad');
            $table->dropColumn('Pais');
            $table->dropColumn('CodigoPostal');
        });
    }
}
