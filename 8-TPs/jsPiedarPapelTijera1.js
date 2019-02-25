/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

var respuestamaq;
var respuestaus;

var eleccionusuario;



function comenzar()
{

  eleccionMaquina = (Math.floor(Math.random() * 3) + 1);


  eleccionusuario=parseInt(eleccionusuario);



  switch (eleccionMaquina)
  {
        case 1:
        {
            console.log("La Maquina Eligio Piedra");
            break;
        }

         case 2:
        {
            console.log("La Maquina Eligio Papel");
            break;
        }

         case 3:
        {
            console.log("La Maquina Eligio Tijera");
            break;
        }
  }




}//FIN DE LA FUNCIÓN



  

function piedra()
{
        
    if (eleccionMaquina == eleccionusuario) 
    {
        alert("Es Un Empate!!! Los Dos Eligieron Lo Mismo ");
    } 

    else 
    {
        if ((eleccionusuario == 1) && (eleccionMaquina == 2)) 
        {
            alert("Gana La Maquina.");
        } 

        else ((eleccionusuario == 1) && (eleccionMaquina == 3)) 
        {
            alert("Gana El Usuario :D.");
        } 

    } 
	
}//FIN DE LA FUNCIÓN



function papel()
{

       if ((eleccionusuario == 2) && (eleccionMaquina == 3)) 
        {
            alert("Gana La Maquina.");
        } 

        else ((eleccionusuario == 2) && (eleccionMaquina == 1)) 
        {
            alert("Gana El Usuario :D.");
        } 

}//FIN DE LA FUNCIÓN


function tijera()
{

       if ((eleccionusuario == 3) && (eleccionMaquina == 2)) 
        {
            alert("Gana La Maquina.");
        } 

        else ((eleccionusuario == 3) && (eleccionMaquina == 1)) 
        {
            alert("Gana El Usuario :D.");
        } 

}//FIN DE LA FUNCIÓN





