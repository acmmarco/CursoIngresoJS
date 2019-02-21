function mostrar()
{
//tomo la edad  


var edadaingresar;
var esposas;


   edadaingresar=document.getElementById('edad').value;
   esposas=estadoCivil.options[estadoCivil.selectedIndex].value;


   edadaingresar=parseInt(edadaingresar);
  


      if (edadaingresar <= 17 && esposas == "Casado") 

   	   {
   		   alert("Es Muy Pequeño/a para NO ser Soltero/a");
   	   }


      else  

   	   {
   		   
   		    if (edadaingresar <= 17 && esposas == "Divorciado") 

   	          {
   		           alert("Es Muy Pequeño/a para NO ser Soltero/a");
   	          }  

   	   }   
   	   
         

}//FIN DE LA FUNCIÓN
