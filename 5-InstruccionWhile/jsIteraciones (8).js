function mostrar()
{
	var contador=0;
	var producto=1;
	var acumulador=0;
	var numero;
	var respuesta;
	do
	{
		numero = prompt("Ingrese un número positivo o negativo.");
		numero = parseInt(numero);
		if (numero > 0)
		{
			acumulador = (acumulador + numero);
		}
		else
		{
			contador = (contador + 1);
			producto = (producto * numero);
		}	
	}
	while (respuesta = confirm("¿Desea ingresar otro número?"));
	document.getElementById("suma").value = (acumulador);
	if (contador > 0)
	{
		document.getElementById("producto").value = (producto);
	}
	else
	{
		producto=0;
		document.getElementById("producto").value = (producto);
	}
}
//FIN DE LA FUNCIÓN