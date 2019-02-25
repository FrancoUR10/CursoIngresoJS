function mostrar()
{
	var cantidad = 0;
	var contador = 0;
	var acumulador = 0;
	while (contador < 5)
	{
		contador = (contador + 1);
		cantidad = prompt("Ingrese un número.");
		cantidad = parseInt (cantidad);
		acumulador = (acumulador + cantidad);
	}
	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = (acumulador / contador);
}//FIN DE LA FUNCIÓN