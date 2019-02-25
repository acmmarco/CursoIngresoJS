/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroSecreto; // Se Definen Las Variables
var contadorIntentos;
var numeroingresado;


contadorIntentos=0; // Se Pone Valor De Inicio Al Contador De Intentos



function comenzar()
{
    numeroSecreto=(Math.floor(Math.random() *100) + 1); // Se Genera El Numero Secreto Random
}



function verificar()
{

    contadorIntentos=contadorIntentos+1; //  Se Generan Los Intentos Una Y Otra Vez

    numeroingresado=numero.value; // Atencion!!! Este Fue El Error!!! 

    intentos.value=contadorIntentos;

    console.log(numeroSecreto); // Se Muestra En La Consola El Numero Secreto


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
