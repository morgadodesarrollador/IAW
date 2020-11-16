<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUsuariosPk extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::table('usuarios', function (Blueprint $table) {
            $table->integer('userid')->primary()->change();
            $table->string('email',50)->after('pass');
            $table->renameColumn('pass', 'password');
          //  $table->dropColumn('rol');
           // $table->enum('rol',['invitado','usuario','gestor','administrador'])->change();

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('usuarios', function (Blueprint $table) {
            $table->dropColumn('email');
            $table->renameColumn('password','pass');
        });
    }
}
