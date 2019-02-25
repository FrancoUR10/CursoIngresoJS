function mostrar()
{
	var respuesta='si';
	var cantidad = 0;
	var contador = 0;
	var acumulador = 0;
	while (respuesta == "si")
	{
		contador = (contador + 1);
		cantidad = prompt("Ingrese un número.");
		cantidad = parseInt (cantidad);
		acumulador = (acumulador + cantidad);
		respuesta = prompt("¿Desea ingresar otro número?");
	}
	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = (acumulador / contador);
	
}//FIN DE LA FUNCIÓN