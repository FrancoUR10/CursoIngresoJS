function mostrar()
{
	// declarar variables


	var numero;
	numero = prompt("Ingrese un número.");
	numero = parseInt(numero);
	var maximo;
	var minimo;
	var respuesta;
	maximo = (numero);
	minimo = (numero);
	do
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		if (numero > maximo)
		{
			maximo = (numero);
		}
		if (numero < minimo)
		{
			minimo = (numero);
		}
		
	} while (respuesta = confirm("¿Desea ingresar otro número?"));
	document.getElementById("maximo").value = (maximo);
	document.getElementById("minimo").value = (minimo);
}//FIN DE LA FUNCIÓN