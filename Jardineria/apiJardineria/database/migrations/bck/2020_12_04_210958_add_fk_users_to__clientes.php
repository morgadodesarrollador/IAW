<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkUsersToClientes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('JAMusers', function (Blueprint $table) {
            $table->integer('cliente')->after('image');
            $table->foreign('cliente')->references('codigo')->on('JAMclientes')
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
        Schema::table('JAMusers', function (Blueprint $table) {
            $table->dropForeign('JAMusers_id_foreign');
        });
    }
}
