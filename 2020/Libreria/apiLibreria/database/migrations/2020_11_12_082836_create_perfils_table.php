<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePerfilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('perfiles', function (Blueprint $table) {
            $table->smallInteger('perfilid')->primary();
            $table->string('email',25);
            $table->string('facebook',100);
            $table->string('instagram',100);
            $table->string('foto',100);
            $table->enum('rol',['invitado','usuario','gestor','administrador']);
            $table->smallInteger('usuario');

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
        Schema::dropIfExists('perfiles');
    }
}
