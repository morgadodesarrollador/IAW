<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkProductosToGamas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('JAMgamasproductos', function (Blueprint $table) {
            $table->foreign('Gama')->references('Gama')->on('JAMproductos')
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
        Schema::table('JAMgamasproductos', function (Blueprint $table) {
            $table->dropForeign('JAMgamasproductos_Gama_foreign');
        });
    }
}
