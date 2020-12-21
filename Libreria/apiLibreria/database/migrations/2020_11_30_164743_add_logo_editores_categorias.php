<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLogoEditoresCategorias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('editores', function (Blueprint $table) {
            $table->string('logo',50)->after('nombre_editorial');
        });

        Schema::table('categorias', function (Blueprint $table) {
            $table->string('logo',50)->after('nombre_categoria');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('editores', function (Blueprint $table) {
            $table->dropColumn('logo');
        });
        Schema::table('categorias', function (Blueprint $table) {
            $table->dropColumn('logo');
        });
    }
}
