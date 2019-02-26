/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

	var temper;
	var fahrcent1;
	var fahrcent2;


	temper=Temperatura.value;


	temper=parseInt(temper);


	fahrcent1=temper-32;
	fahrcent2=fahrcent1*(5/9);


	alert(temper + " Fahrenheit Son " + fahrcent2 + " Centigrados.")

}




function CentigradosFahrenheit () 
{
 
	var temper;
	var centfahr1;
	var centfahr2;


	temper=Temperatura.value;


	temper=parseInt(temper);


	centfahr1=temper*(9/5)
	centfahr2=centfahr1+32;


	alert(temper + " Centigrados Son " + centfahr2 + " Fahrenheit.")
	
}
