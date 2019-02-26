/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () // CUIDADO!!! Puede Ser Que No Ande Porque Hay Un Error En El ONCLICK Del HTML 
{   

    var preone;
    var pretwo;
    var prethree;
    var sumar;


    preone=PrecioUno.value;
    pretwo=PrecioDos.value;
    prethree=PrecioTres.value;

    
    preone=parseInt(preone);
    pretwo=parseInt(pretwo);
    prethree=parseInt(prethree);


    sumar=preone+pretwo+prethree;
    alert("La Suma Es: " + sumar);

}



function Promedio () 
{

    var preone;
    var pretwo;
    var prethree;
    var sumar;
    var promedio;


    preone=PrecioUno.value;
    pretwo=PrecioDos.value;
    prethree=PrecioTres.value;

    
    preone=parseInt(preone);
    pretwo=parseInt(pretwo);
    prethree=parseInt(prethree);


    sumar=preone+pretwo+prethree;
    promedio=sumar / 3;


    alert("El Promedio Es: " + promedio);
	
}


function PrecioFinal () 
{
    
    var preone;
    var pretwo;
    var prethree;
    var sumar;
    var precioiva;
    


    preone=PrecioUno.value;
    pretwo=PrecioDos.value;
    prethree=PrecioTres.value;

    
    preone=parseInt(preone);
    pretwo=parseInt(pretwo);
    prethree=parseInt(prethree);


    sumar=preone+pretwo+prethree;
    precioiva=sumar+(sumar*0.21);
 
 
    alert("El Precio Con El Iva Incluido Es: " + precioiva);
    
}
