
function mostrar()
{

	var ancho=prompt("Por Favor, Ingrese el Ancho de Un Rectangulo (en cms): ");
	ancho=parseInt(ancho);

	var alto=prompt("Por Favor, Ingrese el Alto de Un Rectangulo (en cms) : ");
	alto=parseInt(alto);

	var perimetro= (ancho * 2) + (alto * 2);

	alert("El Perimetro Del Rectangulo Es De: "+ perimetro + " cms.");

}


