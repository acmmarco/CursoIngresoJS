/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

	var edad;
	var sexo;
	var estadocivil;
	var sueldobruto;
	var legajo;
	var nacionalidad;


	edad=prompt("Por Favor, Ingrese Su Edad (Entre 18 y 90 Años):");
	edad=parseInt(edad);

	while (edad < 18 || edad > 90)
	{
		edad=prompt("Por Favor, Ingrese Una Edad Valida: ");
		edad=parseInt(edad);
	}	



	sexo=prompt("Por Favor, Ingrese Su Sexo. Ingrese m (En Minuscula) Si Es Hombre, Y f (En Minuscula) Si Es Mujer. Muchas Gracias");

	while (sexo !== "f" && sexo !== "m")
	{
		sexo=prompt("Por Favor, Ingrese Un Sexo Valido: ");
	}



	estadocivil=prompt("Por Favor, Ingrese Su Estado Civil: 1 Para Soltero, 2 Para Casados, 3 Para Divorciados, 4 Para Viudos: ");
	estadocivil=parseInt(estadocivil);

	while (estadocivil < 1 || estadocivil > 4)
    {
		estadocivil=prompt("Por Favor, Ingrese Un Estado Civil Valido:  1 Para Soltero, 2 Para Casados, 3 Para Divorciados, 4 Para Viudos: ");
        estadocivil=parseInt(estadocivil);
	}



	sueldobruto=prompt("Por Favor, Ingrese Su Sueldo Bruto: ");
	sueldobruto=parseInt(sueldobruto);

	while(sueldobruto < 8000)    
	{
		sueldobruto=prompt("Por Favor, Ingrese Un Sueldo Bruto Valido: ");
	    sueldobruto=parseInt(sueldobruto);
	}



	legajo=prompt("Por Favor, Ingrese Su Numero De Legajo: ")
	legajo=parseInt(legajo);

	while (legajo < 1000 || legajo > 9999)
	{
        legajo=prompt("Por Favor, Ingrese Un Numero De Legajo Valido: ")
	    legajo=parseInt(legajo);
	}



	nacionalidad=prompt("Por Favor, Ingrese Su Nacionalidad: a (En Minuscula) Para Argentinos, e (En Minuscula) Para Extranjeros, N (En Minuscula) Para Nacionalizados");
	
	while (nacionalidad !=="a" && nacionalidad !== "n")
	{
		if (nacionalidad !== "e")
		{
			nacionalidad=prompt("Por Favor, Ingrese Una Nacionalidad Valida: a (En Minuscula) Para Argentinos, e (En Minuscula) Para Extranjeros, N (En Minuscula) Para Nacionalizados");
	    }

	}



	document.getElementById('Edad').value=edad;

	document.getElementById('Sexo').value=sexo;

	document.getElementById('EstadoCivil').value=estadocivil;

	document.getElementById('Sueldo').value=sueldobruto;

	document.getElementById('Legajo').value=legajo;

	document.getElementById('Nacionalidad').value=nacionalidad;


 
}
