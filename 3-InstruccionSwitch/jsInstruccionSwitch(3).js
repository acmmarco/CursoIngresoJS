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
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
	{ 
		alert("Este Mes Tiene 30 o Mas Dias");
		break;
	}

    case "Febrero":
	{ 
		alert("Este Mes NO Tiene Mas de 29 Dias");
		break;
	}

}



}//FIN DE LA FUNCIÓN
