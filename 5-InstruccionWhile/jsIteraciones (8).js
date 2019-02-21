function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';



    acumulador=suma.value;
    
    acumulador=producto.value;


	
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


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
