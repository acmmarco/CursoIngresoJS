function mostrar() 

{
	var respuesta;
	var numero;
	var maximo;
	var minimo;
	var bandera;


	respuesta = 'si';
	bandera = true;


	while (respuesta == 'si') 
	{

		numero = prompt("Por Favor, Ingrese Un Numero ");
		numero = parseInt(numero);


		if (bandera) 
		{
			maximo = numero;
			minimo = numero;
			bandera = false;
		} 


		else 
		{

			if (numero > maximo) 
			{
				maximo = numero;
			}

			if (numero < minimo) 
			{
				minimo = numero;
			}

		}


		respuesta = prompt("Desea Ingresar Mas Datos??? Ingrese SI En Minuscula Para Continuar: ");

	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
