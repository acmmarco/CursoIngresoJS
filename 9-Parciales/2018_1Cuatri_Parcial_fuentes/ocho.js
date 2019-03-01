function mostrar() 

{
	var letrasingresadas;

	var numero;

	var respuesta="si";

	var contadorPositivos;
	var sumaNegativos;
	var sumaPositivos;
	var contadorCeros;
	var contadorPares;
	var contadorImpares;
	var promedioPositivos;

	var mayorNumero;
	var mayorletra;
	var menorNumero;
	var menorletra;

    
    sumaPositivos = 0;
    sumaNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	contadorImpares = 0;
	mayorNumero = 0;
	menorNumero = 0;
	promedioPositivos = 0;



	var contador=0;



	while (respuesta=="si") 
	{

		letrasingresadas=prompt("Por Favor, Ingrese una letra: ");


		numero=prompt("Por Favor, Ingrese Un Numero Entre -100 y 100:");
		numero=parseInt(numero);



	    while (numero <= -101  || numero >= 101)
	   	{
		 	numero=prompt("Por Favor, Ingrese Un Numero Valido: " + numero);
		 	numero=parseInt(numero);
	  	} 



    	if (numero > 0) 
		{ // es positivo
			contadorPositivos = contadorPositivos + 1;
			sumaPositivos= sumaPositivos + numero;
		} 

		else 
		{
			if (numero < 0) 
			{ // es negativo
				sumaNegativos = sumaNegativos + numero;
			} 

			else 
			{ // es cero
				contadorCeros = contadorCeros + 1;
			}
		}


	

		if (numero % 2 == 0 && numero !== 0)
		{ // es par
			contadorPares = contadorPares + 1;
		}
		else
		{ // es impar
			contadorImpares = contadorImpares + 1;
		}



		if (contador == 0)
		{ 
			mayorNumero=numero;
			mayorletra=letrasingresadas;
			menorNumero=numero;
			menorletra=letrasingresadas;
		}

		else
        { 
			if (numero < menorNumero)
		    { 
				menorNumero=numero;
				menorletra=letrasingresadas;
		    }

		    if (numero > mayorNumero)
		    { 
				mayorNumero=numero;
				mayorletra=letrasingresadas;
		    }
		}


		contador=contador+1;
   




        respuesta = prompt("Desea Ingresar Mas Datos??? Ingrese SI En Minuscula Para Continuar: ");
        

    }


    promedioPositivos = sumaPositivos / contadorPositivos;


    document.write("(1) Contador De Los Numeros Pares: " + contadorPares + "<br>");
    document.write("(2) Contador De Los Numeros Impares: " + contadorImpares + "<br>");
    document.write("(3) Contador De Los Ceros: " + contadorCeros + "<br>");
    document.write("(4) Promedio De Los Positivos: " + promedioPositivos + "<br>"); 
	document.write("(5) Suma de Los Negativos: " + sumaNegativos + "<br>");
	document.write("(6) Mayor Nota: " + mayorNumero + ". Letra De La Mayor Nota: " + mayorletra + "<br>");
	document.write("(7) Menor Nota: " + menorNumero + ". Letra De La Menor Nota: " + menorletra + "<br>");
	    	    


}
	





