/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
numeroSecreto=parseInt(numeroSecreto);

var contadorIntentos;
contadorIntentos=parseInt(contadorIntentos);

var numeroingresado;
numeroingresado=parseInt(numeroingresado);



function comenzar()
{

    numeroSecreto=Math.Floor(Math.random()+100)+1;
    contadorIntentos=0;

}



function verificar()
{

    contadorIntentos=contadorIntentos+1;

    numero.value=numeroingresado;

    intentos.value=contadorIntentos;


    if (numeroingresado == numeroSecreto)

      {
          alert("Usted Es El Ganadooor!!!, Y Solo En " + contadorIntentos + " Intentos.");
      }

    else 

      {
          if (numeroingresado < numeroSecreto)

          {
              alert("Falta... :D");
          }


          else 

          {
              alert("Te Pasaste... :D");
          }

      }


}
