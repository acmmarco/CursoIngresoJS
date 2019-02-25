
var eleccionMaquina;
var eleccionusuario;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;



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
        ContadorDeEmpates++;
   	}
 
    else 
    {
        if ((eleccionusuario == 1) && (eleccionMaquina == 2)) 
        {
            alert("Gana La Maquina.");
            ContadorDePerdidas++;
        } 

        else ((eleccionusuario == 1) && (eleccionMaquina == 3)) 
        {
            alert("Gana El Usuario :D.");
            ContadorDeGanadas++;
        } 

    } 
	
}//FIN DE LA FUNCIÓN



function papel()
{

       if ((eleccionusuario == 2) && (eleccionMaquina == 3)) 
        {
            alert("Gana La Maquina.");
            ContadorDePerdidas++;
        } 

        else ((eleccionusuario == 2) && (eleccionMaquina == 1)) 
        {
            alert("Gana El Usuario :D.");
            ContadorDeGanadas++;
        } 

}//FIN DE LA FUNCIÓN


function tijera()
{

       if ((eleccionusuario == 3) && (eleccionMaquina == 2)) 
        {
            alert("Gana La Maquina.");
            ContadorDePerdidas++;
        } 

        else ((eleccionusuario == 3) && (eleccionMaquina == 1)) 
        {
            alert("Gana El Usuario :D.");
            ContadorDeGanadas++;
        } 

}//FIN DE LA FUNCIÓN


function mostrarResultado()
{
	document.getElementById("ganadas").value=ContadorDeGanadas;
	document.getElementById("empatadas").value=ContadorDeEmpates;
	document.getElementById("perdidas").value=ContadorDePerdidas;
}
