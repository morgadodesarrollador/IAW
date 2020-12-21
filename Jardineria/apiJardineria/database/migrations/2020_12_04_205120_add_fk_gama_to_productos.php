<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkGamaToProductos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('JAMproductos', function (Blueprint $table) {
            $table->foreign('Gama')->references('Gama')->on('JAMgamasproductos')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('JAMproductos', function (Blueprint $table) {
            $table->dropForeign('JAMproductos_Gama_foreign');
        });
    }
}
