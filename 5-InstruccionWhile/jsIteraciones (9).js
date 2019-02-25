function mostrar()
{

	var numero
	var maximo;
	var minimo;
	// declarar variables
	numero = prompt("Escriba un número.");
	numero = parseInt (numero);
	maximo = (numero);
	minimo = (numero);
	var respuesta;
	respuesta = prompt("¿Desea escribir otro número?");
	while(respuesta!='no')
	{
		numero = prompt("Escriba un número");
		numero = parseInt (numero);
		if (numero > maximo)
		{
			maximo = (numero);
		}
		if (numero < minimo)
		{
			minimo = (numero);
		}
		respuesta = prompt("¿Desea escribir otro número?");
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;
	





}//FIN DE LA FUNCIÓN