function mostrar()
{

	var planeta=prompt("Por Favor, Ingrese Un Planeta: ");

	switch (planeta)

	{

		case "tierra":
			alert("Aca Vivimos");
			break;

    	case "mercurio":
    	case "venus":
    		alert("Aca Hace Mas Calor");
    		break;

    	case "marte":
    	case "jupiter":
    	case "saturno":
    	case "urano":
    	case "neptuno":
    		alert("Aca Hace Mas Frio");
    		break;

    	default:	
    		alert("Por Favor Ingrese Un Planeta Valido");
    		break;

	}




}
