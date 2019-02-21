function mostrar()
{
//tomo la edad  

var mesDelAño = document.getElementById('mes').value;

mesDelAño=mes.options[mes.selectedIndex].value;

// alert (mesDelAño);


switch (mesDelAño)

{ 
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
    case "Octubre":
    case "Diciembre":
	{ 
		alert("Este Mes Tiene 31 Dias");
		break;
	}
    
	case "Abril":
	case "Junio":
    case "Septiembre":
    case "Noviembre":
	{ 
		alert("Este Mes Tiene 30 Dias");
		break;
	}
	
    case "Febrero":
	{ 
		alert("Este Mes Tiene 28 Dias");
		break;
	}

}



}//FIN DE LA FUNCIÓN
