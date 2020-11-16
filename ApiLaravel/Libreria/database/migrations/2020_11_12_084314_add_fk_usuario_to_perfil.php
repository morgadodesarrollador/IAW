<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkUsuarioToPerfil extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('perfiles', function (Blueprint $table) {
            $table->foreign('usuario')
                ->references('userid')->on('usuarios')
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
        Schema::table('perfiles', function (Blueprint $table) {
            $table->dropColumn('usuario');
        });
    }
}
