/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{

	var primernumero;
	var segundonumero;
	var sumar;


	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;


	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);


        sumar=primernumero+segundonumero;
	alert("La Suma Es: " + sumar);
	
}

function restar()
{

	var primernumero;
	var segundonumero;
	var restar;


	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;


	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);


        restar=primernumero-segundonumero;
	alert("La Resta Es: " + restar);
	
	
}

function multiplicar()
{ 

	var primernumero;
	var segundonumero;
	var multiplicar;


	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;


	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);


        multiplicar=primernumero*segundonumero;
	alert("El Producto Es: " + multiplicar);
	
	
}

function dividir()
{

	var primernumero;
	var segundonumero;
	var dividir;


	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;


	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);


        dividir=primernumero / segundonumero;
	alert("La Division Da: " + dividir);
	
	
}

