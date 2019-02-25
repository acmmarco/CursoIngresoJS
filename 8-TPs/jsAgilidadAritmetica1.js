/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
    

	var num1;
	var num2;
	var oper;
	var respuesta;
	var respuestaop;



function comenzar()
{  
    num1 = (Math.floor(Math.random() * 10) + 1);
    console.log("El Primer Numero Es: " + num1);

    num2 = (Math.floor(Math.random() * 10) + 1);
    console.log("El Segundo Numero Es: " + num2);

    oper = (Math.floor(Math.random() * 4) + 1);




   switch (oper) 
   {
        case 1:
        {
       	    console.log("La Operacion Es Suma");
            respuestaop = num1 + num2;
            console.log("La Respuesta Es: "+ respuestaop);
            break;
        }

        case 2:
        {
            console.log("La Operacion Es Resta");
            respuestaop = num1 - num2;
            console.log("La Respuesta Es: "+ respuestaop);
            break;
        }

        case 3:
        {
            console.log("La Operacion Es La Multiplicacion");
            respuestaop = num1 * num2;
            console.log("La Respuesta Es: "+ respuestaop);
            break;
        }

        case 4:
        {
            console.log("La Operacion Es La Division");
            respuestaop = num1 / num2;
            console.log("La Respuesta Es: "+ respuestaop);
            break;
        }

    }


  document.getElementById('PrimerNumero').value = num1;
  
  document.getElementById('Operador').value = oper;
  
  document.getElementById('SegundoNumero').value = num2;


}//FIN DE LA FUNCIÓN



 
function Responder()
{

	respuesta = document.getElementById('Respuesta').value;


	if (respuesta == respuestaop)
   	{ 
   		alert("Felicitaciones!!! Ha Acertado!!! :D");
   	}

	else
   	{ 
   		alert("Vuelva a Intentarlo :D");
   	}


}//FIN DE LA FUNCIÓN

