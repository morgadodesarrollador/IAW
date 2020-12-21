<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkClientesToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('JAMclientes', function (Blueprint $table) {
            $table->foreign('userid')->references('id')->on('JAMusers')
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
        Schema::table('JAMclientes', function (Blueprint $table) {
            $table->dropForeign('JAMclientes_userid_foreign');

        });
    }
}
