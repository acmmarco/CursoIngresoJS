function mostrar() 

{

	var respuesta="si";

	var marca;
	var peso;
	var temperatura;

	var contadortemppares;
	var mayorpeso;
	var mayormarca;
	var contadorcerogrados;
	var contadorpesotodos;
	var acumuladorpesotodos;
	var promediopesotodos;
	var menorpeso;
	var contador;


	contadortemppares=0;
	mayorpeso=0;
	contadorcerogrados=0;
	contadorpesotodos=0;
	acumuladorpesotodos=0;
	promediopesotodos=0;
	menorpeso=0;
	contador=0;
	


	while (respuesta=="si")
	{

		marca=prompt("Por Favor, Ingrese La Marca De Su Producto: ");


		peso=prompt("Por Favor, Ingrese El Peso Del Producto: ");
		peso=parseInt(peso);


		while(peso < 1 ||  peso > 100)
		{
			peso=prompt("Por Favor, Ingrese Un Peso Valido. Muchas Gracias.");
			peso=parseInt(peso);
		}	


		temperatura=prompt("Por Favor, Ingrese La Temperatura De Su Producto: ");
		temperatura=parseInt(temperatura);


		while(temperatura < -30 || temperatura > 30)
		{
			temperatura=prompt("Por Favor, Ingrese Una Temperatura Valida. Muchas Gracias");
			temperatura=parseInt(temperatura);
		}	


		if (temperatura / 2 == 0)
		{
			contadortemppares=contadortemppares+1;
		}	


		if (contador == 0)
		{
			mayorpeso=peso;
			mayormarca=marca;
			menorpeso=peso;
		}

		else 
		{
			if (peso > mayorpeso)
			{
				mayorpeso=peso;
				mayormarca=marca;
			}

			if (peso < menorpeso)
			{
				menorpeso=peso;
			}	
		}

		contador=contador+1;		


		if (temperatura < 0)
		{
			contadorcerogrados=contadorcerogrados+1;
		}

        

		contadorpesotodos=contadorpesotodos+1;

		acumuladorpesotodos=acumuladorpesotodos+peso;



		respuesta=prompt("Desea Ingresar Mas Datos??? Responda SI En Minuscula Para Continuar: ");

	}	
	
	

	promediopesotodos=acumuladorpesotodos/contadorpesotodos;


	document.write("a) La Cantidad De Temperaturas Pares Es: " + contadortemppares + "<br>");
	document.write("b) La Marca Del Producto Mas Pesado Es: " + mayormarca + "<br>");
	document.write("c) La Cantidad De Productos Que Se Conservan A Menos De 0 Grados Son: " + 
    contadorcerogrados + "<br>");
    document.write("d) El Promedio De Peso De Todos Los Productos Es: " + promediopesotodos 
    + "<br>");
    document.write("e) El Peso Maximo Es: " + mayorpeso + " .El Peso Minimo Es: " + menorpeso 
    + "<br>");


}
	


