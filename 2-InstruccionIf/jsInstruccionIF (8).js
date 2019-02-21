function mostrar()
{
//tomo la edad  

var edadaingresar;
var esposas;


   edadaingresar=document.getElementById('edad').value;
   esposas=estadoCivil.options[estadoCivil.selectedIndex].value;


   edadaingresar=parseInt(edadaingresar);
  

      if (edadaingresar >= 17 && esposas == "Soltero") 

   	   {
   		   alert("Es Soltero/a y No Es Menor");
   	   }


}//FIN DE LA FUNCIÓN
