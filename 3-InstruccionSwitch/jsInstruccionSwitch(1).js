function mostrar()
{
//tomo la edad  

var mesDelAño = document.getElementById('mes').value;

mesDelAño=mes.options[mes.selectedIndex].value;


switch (mesDelAño)

{ 
	case "Enero":
	{ 
		alert("Que Comiences Bien El Año!!! :D");
		break;
	}

	case "Marzo":
	{ 
		alert("A Claaaseees!!!");
		break;
	}

	case "Julio":
	{ 
		alert("Se Vienen Las Vacaciones!!! :D");
		break;
	}

	case "Diciembre":
	{ 
		alert("Felices Fiestas!!! :D");
		break;
	}

}


}//FIN DE LA FUNCIÓN
