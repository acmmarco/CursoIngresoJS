function mostrar()
{
//tomo la edad  

var edadaingresar;

   edadaingresar=document.getElementById('edad').value;

   edadaingresar=parseInt(edadaingresar);


      if (edadaingresar >= 18) 

   	   {
   		   alert("Usted Es Mayor de Edad");
   	   }


      else  

   	   {
   		   
   		    if (edadaingresar >= 13) 

   	          {
   		           alert("Usted Es Un Adolescente");
   	          }  


   	        else 

   	          {
   		           alert("Usted NO Es Mayor de Edad");
   	          }  

   	   }   
   	   

}//FIN DE LA FUNCIÓN
