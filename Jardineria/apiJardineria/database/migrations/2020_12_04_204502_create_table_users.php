<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('JAMusers', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->enum('rol',['invitado','usuario','gestor','administrador']);
            $table->string('name', 100);
            $table->string('surname', 100);
            $table->string('email', 100);
            $table->string('passwd', 50);
            $table->string('image', 100);
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
        Schema::dropIfExists('JAMusers');
    }
}
