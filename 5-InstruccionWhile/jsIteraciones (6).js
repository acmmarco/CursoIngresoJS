function mostrar()
{

	var contador; // Declaracion De Variables 
  var acumulador;
  

  contador=0; // Inicializacion de Variables
	acumulador=0;
  

while (contador < 5)

{

  var numero=prompt("Ingrese El Numero: ");
  numero=parseInt(numero)
	contador=contador+1; // Para Que No Se Me Tilde 
  acumulador=acumulador+1; // Para que no se me tilde 

} 


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;



}//FIN DE LA FUNCIÓN


}//FIN DE LA FUNCIÓN
