<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkEditorFkCategoriaToLibro extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('libros', function (Blueprint $table) {
            $table->foreign('editorid')
                ->references('editorid')->on('editores')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            
            $table->foreign('categoriaid')
                ->references('categoriaid')->on('categorias')
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
        Schema::table('_libro', function (Blueprint $table) {
            //
        });
    }
}
