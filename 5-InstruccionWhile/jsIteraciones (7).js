function mostrar()
{
	var promedio=0;
	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;
	do
	{
		contador = (contador + 1);
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		acumulador = (acumulador + numero);
		promedio = (acumulador / contador);
	}
	while (respuesta = confirm("¿Desea ingresar otro número."));
	document.getElementById("suma").value = (acumulador);
	document.getElementById("promedio").value = (promedio);
}//FIN DE LA FUNCIÓN