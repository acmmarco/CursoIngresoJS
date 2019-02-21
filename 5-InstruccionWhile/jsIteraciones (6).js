function mostrar()
{

	var contador=0;
	var acumulador=0;
    
        var valor1, valor2, valor3, valor4, valor5;

	acumulador=suma.value;
    
        acumulador=promedio.value;

  
  	valor1=prompt('Ingrese Primer Valor: ');
  	valor1=parseInt(valor1);

  	valor2=prompt('Ingrese Segundo Valor: ');
  	valor2=parseInt(valor2);

  	valor3=prompt('Ingrese Tercer Valor: ');
  	valor3=parseInt(valor3);

        valor4=prompt('Ingrese Cuarto Valor: ');
  	valor4=parseInt(valor4);

  	valor5=prompt('Ingrese Quinto Valor: ');
  	valor5=parseInt(valor5);


    acumulador=valor1+valor2+valor3+valor4+valor5; 


while (contador<=5)

{
	contador++;
} 


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;



}//FIN DE LA FUNCIÓN
