function mostrar()
{

	var hora1;

	hora1=laHora.value;


    switch (hora1)

    {

		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es De Mañana");
			break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			alert("Es De Tarde");
			break;

		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "01":
		case "02":
		case "03":
		case "04":
		case "05":
			alert("Es De Noche");
			break;

		default:
			alert("La Hora No Es Valida");
			break;

	} 


	if (hora1 >=20 && hora1 <=24)

		  {
		  		alert("A Dormiiir!!! :D")
		  }


}
