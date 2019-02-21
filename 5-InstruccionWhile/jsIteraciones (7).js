function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	var sumar=0;


    acumulador=suma.value;
    
    acumulador=promedio.value;
    
	
	acumulador=prompt('Ingrese Nuevo valor: ');
  	acumulador=parseInt(acumulador);

    respuesta=prompt("Desea Ingresar Un Nuevo Valor???");



while (respuesta == "si")

{

	acumulador=prompt('Ingrese Nuevo valor: ');
  	acumulador=parseInt(acumulador);

  	sumar = sumar + acumulador[i]; 
			

  	respuesta=prompt("Desea Ingresar Un Nuevo Valor???");

  	

	contador++;

} 




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN
