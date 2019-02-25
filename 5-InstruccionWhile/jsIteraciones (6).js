function mostrar()
{

  var contador;
  var acumulador;

  contador = 0;
  acumulador = 1;


  while (contador < 5)

  {
    contador = contador + 1;
    numero = prompt("Por Favor, Ingrese El Numero " + contador);
    numero = parseInt(numero);
    acumulador = acumulador + numero;
  }



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


}
