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



var numeroSecreto; // Defino Variables
var contadorIntentos;


contadorIntentos=0; // Le Pongo Valor Al Contador De Intentos



function comenzar()
{
	numeroSecreto = (Math.floor(Math.random() * 100) + 1); // Genero El Numero Secreto
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



    if (numeroingresado == numeroSecreto)

    {
		switch (contadorIntentos)

		{    
			case 1:
			{    
				alert("Usted Es Un Psiquico");
				break;
	  	    }

	   		case 2:
		    {    
			    alert("Excelente Percepcion");
			    break;
	        }

	        case 3:
		    {    
		    	alert("Esto Es Suerte");
		    	break;
	        }

	        case 4:
	     	{    
			    alert("Excelente Tecnica");
			    break;
	        }

            case 5:
		    {    
		    	alert("Usted Esta En La Media");
		    	break;
	        }

            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
	    	{    
		    	alert("Falta Tecnica");
		    	break;
	        }

	        default:
	    	{    
		    	alert("Afortunado En El Amor :D");
		    	break;
	        }

        }
	}

}
