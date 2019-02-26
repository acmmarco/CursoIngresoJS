/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
	var ancho;
	var perimetro;
	var perimetro3;


	largo=Largo.value;
	ancho=Ancho.value;


	largo=parseInt(largo);
	ancho=parseInt(ancho);


	perimetro=(largo*2)+(ancho*2);
	perimetro3=perimetro*3;


	alert("3 Rectangulos De Alambre: "+perimetro3);


}




function Circulo () 
{

	var radio;
	var diametro;
	var perimetro;
	var perimetro3;


	radio=Radio.value;


	radio=parseInt(radio);


    diametro=radio*2;
	perimetro= Math.PI * diametro;
	perimetro3=perimetro * 3;


	alert("3 Circulos De Alambre: "+perimetro3);
	

}




function Materiales () 
{

	var largo;
	var ancho;
	var area;
	var bolsacemento;
	var bolsacal;


	largo=Largo.value;
	ancho=Ancho.value;


	largo=parseInt(largo);
	ancho=parseInt(ancho);


	area=largo*ancho;


	bolsacemento=area*2;
	bolsacal=area*3;


	alert("Materiales Contrapiso: Por Un Area De " + area + " m2 Se Necesitan " 
	+ bolsacemento + " Bolsas De Cemento Y " + bolsacal + " Bolsas De Cal.");

	
}
