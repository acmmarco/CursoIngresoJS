function mostrar()

{

	var numero1=prompt("Por Favor, Ingrese El Numero 1: ");
	numero1=parseInt(numero1);

	var numero2=prompt("Por Favor, Ingrese El Numero 2: ");
	numero2=parseInt(numero2);

	var resultado;

	if (numero1 == numero2)

		{
			alert("Los Numeros Son: " + numero1 + " y " + numero2);
		}

	else 

		{
			if (numero1 > numero2)

			{
				resultado=numero1-numero2;
				alert("El Resultado De La Resta Entre: " + numero1 + " y " + numero2 + " Es: " + resultado);
			}
			
			else 

		    {
			    
			    if (numero1 < numero2)

				{
					resultado=numero1+numero2;
                                        alert("El Resultado De La Suma Entre: " + numero1 + " y " + numero2 + " Es: " + resultado);		
						

						if (resultado > "10")

							{
								resultado=numero1+numero2;
								alert("La Suma Es: " + resultado + " Y Supero el 10");
							}

				}

		    }


		}

}
