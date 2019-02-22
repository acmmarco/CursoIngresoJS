/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
    var respuesta;

	var operadores = ['+','-','*','/'];


	var num1=document.getElementById('Primer número').value;
	num1=parseInt(num1);

	var oper=document.getElementById('Operador matemático').value;

	var num2=document.getElementById('Segundo número').value;
	num2=parseInt(num2);

	var respuesta=document.getElementById('STu respuesta').value;
	respuesta=parseInt(respuesta);

	var respuestanum1;
	respuestanum1=parseInt(respuestanum1);

	var respuestanum2;
	respuestanum2=parseInt(respuestanum2);

	var respuestaop;



function comenzar()
{

	respuestanum1 = Math.floor((Math.random()*100)+1);

    respuestanum2 = Math.floor((Math.random()*100)+1);

    respuestaop = operadores[Math.floor(Math.random()*4)];


}//FIN DE LA FUNCIÓN



function Responder()
{
	
	if ( (num1 == respuestanum1) && (num2 == respuestanum2) && (oper == respuestaop) )
   
   	{ 
   		alert("Felicitaciones!!! Ha Acertado!!! :D");

   	}


	else
   
   	{ 
   		alert("Vuelva a Intentarlo :D");

   	}


   	console.log("El Numero 1 Es: " +respuestanum1 + ". El Numero 2 Es: " + respuestanum2 + ". La Operacion Basica Es: " + respuestaop);



}//FIN DE LA FUNCIÓN

