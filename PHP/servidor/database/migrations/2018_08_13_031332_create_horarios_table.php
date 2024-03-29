<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHorariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horarios', function (Blueprint $table) {
            $table->time('hora');
            $table->integer('dia');
            $table->string('idCurso');
            $table->integer('idSemestre');
            $table->string('nombreSeccion');
            $table->string('idSalon');
            $table->boolean('estado')->default(true);
            $table->foreign('idSalon')->references('idSalon')->on('salons');  
            $table->foreign('idCurso','idSemestre','nombreSeccion')->references('idCurso','idSemestre','nombreSeccion')->on('secciones'); 
            $table->primary(['hora','dia','idSalon']);
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
        Schema::dropIfExists('horarios');
    }
}
