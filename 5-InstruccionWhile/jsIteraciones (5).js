function mostrar()
{

	var sexos = prompt("ingrese f ó m .");


while ((sexos !== "f") && (sexos !== "m")) 

{
	sexos = prompt("Dato No Valido. Por Favor Reintentelo. Muchas Gracias");
} 


   Sexo.value=sexos;

   sexos = document.getElementById('Sexo').value;


}//FIN DE LA FUNCIÓN
