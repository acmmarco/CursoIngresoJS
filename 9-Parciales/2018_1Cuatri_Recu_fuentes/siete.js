function mostrar() 

{
	var contador;
	var cantidadAlumnos;
	var alumnoNota;
	var alumnoSexo;
	var totalNotas;
	var promedio;
	var notaMasBaja;
	var notaMasBajaSexo;
	var contadorSupera5;


	contador = 0;
	cantidadAlumnos = 5;
	totalNotas = 0;
	contadorSupera5 = 0;


	while (contador < cantidadAlumnos) 
	{// entrada y validacion dedatos
		alumnoNota = prompt("Por Favor, Ingrese Una Nota: ");
		alumnoNota = parseInt(alumnoNota);


		while (alumnoNota <= 0 || alumnoNota >= 10) 
		{
			alumnoNota = prompt("Dato No Valido. Por Favor Ingrese Una Nota: ");
			alumnoNota = parseInt(alumnoNota);
		}


		alumnoSexo = prompt("Por Favor Ingrese Sexo De La Persona: ");


		while (alumnoSexo != "f" && alumnoSexo != "m")
		{
			alumnoSexo = prompt("Dato No Valido. Por Favor Ingrese El Sexo De La Persona:");
		}


		// promedio de notas
		totalNotas = totalNotas + alumnoNota;


		// Nota mas baja
		if (contador == 0) 
		{
			notaMasBaja = alumnoNota;
			notaMasBajaSexo = alumnoSexo;
		} 

		else 
		{
			if (notaMasBaja < alumnoNota) 
			{
				notaMasBaja = alumnoNota;
				notaMasBajaSexo = alumnoSexo;
			}
		}


		// varones con nota >= 6
		if (alumnoSexo == "m" && alumnoNota >= 6) 
		{
				contadorSupera5 = contadorSupera5 + 1;
		}


		contador = contador + 1;


	}


	promedio = totalNotas / cantidadAlumnos;


	alert("El Promedio De Las Notas Es: " + totalNotas);
	alert("La Nota Más Baja Es De " + notaMasBaja + " De Una Persona De Sexo " + notaMasBajaSexo);
	alert("La Cantidad De Varones Que Sacaron Mas De 6 Es De " + contadorSupera5);


}


/* 
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
 */
