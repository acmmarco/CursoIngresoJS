function mostrar() 

{

	var respuesta;
	var numero;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var sumaPositivos;
	var sumaNegativos;
	var promedioNegativos;
	var promedioNegativos;
	var DiferenciaNegPos;


	respuesta = 'si';
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;



	while (respuesta == 'si') 
	{

		numero = prompt("Por Favor, Ingrese Un Numero: ");
		numero = parseInt(numero);


		if (numero > 0) 
		{ // es positivo
			contadorPositivos = contadorPositivos + 1;
			sumaPositivos = sumaPositivos + numero;
		} 


		else 
		{

			if (numero < 0) 
			{ // es negativo
				contadorNegativos = contadorNegativos + 1;
				sumaNegativos = sumaNegativos + numero;
			} 

			else 
			{ // es cero
				contadorCeros = contadorCeros + 1;
			}
		}


		if (numero % 2 == 0 && numero != 0) 
		{ // es par
			contadorPares = contadorPares + 1;
		}


		promedioPositivos = sumaPositivos / contadorPositivos;
		promedioNegativos = sumaNegativos / contadorNegativos;
		DiferenciaNegPos = sumaPositivos + sumaNegativos


		respuesta = prompt("Desea Ingresar Mas Datos??? Ingrese SI En Minuscula Para Continuar: ");


	}



	document.write(
		"(1) Suma de Los Negativos: " + sumaNegativos + "<br>" +
		"(2) Suma De Los Positivos: " + sumaPositivos + "<br>" +
		"(3) Contador De Los Positivos: " + contadorPositivos + "<br>" +
		"(4) Contador De Los Negativos " + contadorNegativos + "<br>" +
		"(5) Contador De Los Ceros: " + contadorCeros + "<br>" +
		"(6) Contador De Los Numeros Pares: " + contadorPares + "<br>" +
		"(7) Promedio De Los Positivos: " + promedioPositivos + "<br>" +
		"(8) Promedio De Los Negativos: " + promedioNegativos + "<br>" +
		"(9) Diferencia Entre Negativos y Positivos: " + DiferenciaNegPos + "<br>"

	);

}//FIN DE LA FUNCIÓN
