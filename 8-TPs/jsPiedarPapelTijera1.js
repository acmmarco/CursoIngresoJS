/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var eleccionMaquina;

var decisionUsuario = prompt("¿Piedra, papel o tijera?");

var numero =  Math.floor((Math.random()*3)+1); 

var respuesta;


function comenzar()
{

    if (numero == 1) 
    {
        respuesta = "Piedra";
    } 

    else if (numero == 2) 
    {
        respuesta = "Papel";
    } 

    else 
    {
        respuesta = "Tijera";
    }

    return respuesta;





}//FIN DE LA FUNCIÓN
function piedra()
{


	    if (decisionUsuario == decisionOrdenador) {
        return console.log("Empate, los dos eligieron " +decisionUsuario);
    } else {
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Papel") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
        } 
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Tijera") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
        } 
	

}//FIN DE LA FUNCIÓN
function papel()
{
       if (decisionUsuario == "Papel" && decisionOrdenador == "Tijera") { 
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
         }
         if (decisionUsuario == "Papel" && decisionOrdenador == "Piedra"){
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
        }

}//FIN DE LA FUNCIÓN
function tijera()
{
	
   if (decisionUsuario == "Tijera" && decisionOrdenador == "Piedra") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
            }
         if (decisionUsuario == "Tijera" && decisionOrdenador == "Papel") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
        }


}//FIN DE LA FUNCIÓN
