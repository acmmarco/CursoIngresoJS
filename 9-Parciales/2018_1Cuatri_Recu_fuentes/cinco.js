
function mostrar()
{

	var dia=prompt("Por Favor, Ingrese Un Dia De La Semana: ");

	var mensaje;


	switch (dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		{
			mensaje="A Trabajaaar!!! :-I";
			break;
		}

		case "sabado":
		case "domingo":
		{
			mensaje="Buen Findeee!!! :-D";
			break;
		}

		default:
		{
			mensaje="Por Favor, Ingrese Un Dia De La Semana Valido. Muchas Gracias.";
			break;
		}


	}


	alert(mensaje);


}
