/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo1;
	var resultado1;


	sueldo1=sueldo.value;
	resultado1=resultado.value;


	sueldo1=parseInt(sueldo1);
	resultado1=parseInt(resultado1);


	var importeconaumento=sueldo1 + sueldo1/10;


	document.getElementById('resultado').value=importeconaumento;

	
}

