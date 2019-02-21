function mostrar()
{
//tomo la edad  

var mesDelAño = document.getElementById('mes').value;

mesDelAño=mes.options[mes.selectedIndex].value;

alert (mesDelAño);


switch (mesDelAño)

{ 
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	{ 
		alert("Falta Para el Invierno");
		break;
	}

	case "Julio":
	case "Agosto":
	{ 
		alert("Abrigate Que Hace Frio");
		break;	
        }

	case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
	{ 
		alert("Ya Pasamos el Frio... Ahora Calooor!!! :D");
		break;
	}


}



}//FIN DE LA FUNCIÓN
