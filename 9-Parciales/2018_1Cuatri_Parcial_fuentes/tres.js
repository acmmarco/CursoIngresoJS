function mostrar()
{

	var precio=prompt("Por Favor, Ingrese El Precio Sin Descuento: ");
	precio=parseInt(precio);


	var descuento=prompt("Por Favor, Ingrese El Valor del Descuento: ");
	descuento=parseInt(descuento);


	var preciofinal;
	preciofinal=parseInt(preciofinal);


	var preciofinal = precio - (precio * descuento/100);


	document.getElementById('elPrecioFinal').value=preciofinal;

}
