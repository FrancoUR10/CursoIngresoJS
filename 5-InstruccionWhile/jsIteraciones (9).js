function mostrar()
{
  // declarar variables

	var numero;
	var maximo;
	var minimo;
	numero = prompt("Escriba un número.");
	numero = parseInt (numero);
	maximo = (numero);
	minimo = (numero);
  var respuesta;
  do
  {
    numero = prompt("Escriba otro número.");
		numero = parseInt (numero);
		if (numero > maximo)
		{
      maximo = (numero);
		}
		if (numero < minimo)
		{
      minimo = (numero);
		}
	}
  while (respuesta = confirm("¿Desea escribir otro número?"));
	document.getElementById("maximo").value=maximo;
  document.getElementById("minimo").value=minimo;

}//FIN DE LA FUNCIÓN
