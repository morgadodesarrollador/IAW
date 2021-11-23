<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLibrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('libros', function (Blueprint $table) {
            $table->integer('libro_id')->primary();
            $table->string('nombre_libro', 100);
            $table->longText('descripcion')->nullable();
            $table->smallInteger('categoriaid');
            $table->smallInteger('editorid');
            $table->double('precio', 5, 2);
            $table->smallInteger('entrega');
            $table->string('imagen', 100)->nullable();
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
        Schema::dropIfExists('libros');
    }
}
