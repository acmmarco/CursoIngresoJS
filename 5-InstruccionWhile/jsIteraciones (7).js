function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var sumar=0;
	

    acumulador=suma.value;
    promediofinal=promedio.value;

    acumulador=prompt("Ingrese Nuevo valor: ");
    acumulador=parseInt(acumulador);

    acumulador++;

    respuesta=prompt("Desea Ingresar Un Nuevo Valor???");

 
    do 

    {
        
       	acumulador=prompt("Ingrese Nuevo valor: ");
  	    acumulador=parseInt(acumulador);

  	    respuesta=prompt("Desea Ingresar Un Nuevo Valor???");

  	    acumulador++;
  	    contador++;


    }

       while (respuesta == "si")



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN
