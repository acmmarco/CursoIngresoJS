/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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


	alert("El Resultado Es: " + sumar);

}
