/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
numeroSecreto=parseInt(numeroSecreto);

var contadorIntentos;
contadorIntentos=parseInt(contadorIntentos);

var numeroingresado;
numeroingresado=parseInt(numeroingresado);



function comenzar()
{

    numeroSecreto=Math.floor(Math.random()*100)+1;
    contadorIntentos=0;

}



function verificar()
{

    contadorIntentos=contadorIntentos+1;

    numero.value=numeroingresado;

    intentos.value=contadorIntentos;

    console.log(numeroSecreto);


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



	switch (contadorIntentos)

	{    
		case "1":
		{    
			alert("Usted Es Un Psiquico");
	    }

	    case "2":
		{    
			alert("Excelente Percepcion");
	    }

	    case "3":
		{    
			alert("Esto Es Suerte");
	    }
	    case "4":
		{    
			alert("Excelente Tecnica");
	    }

        case "5":
		{    
			alert("Usted Esta En La Media");
	    }

        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
		{    
			alert("Falta Tecnica");
	    }

	    default:
		{    
			alert("Afortunado En El Amor :D");
	    }


	}
