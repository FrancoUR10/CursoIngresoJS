function mostrar()
{
	var promedio=0;
	var acumulador=0;
	var contador=0;
	var numero;
	while (contador < 5)
	{
		contador = (contador + 1);
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		acumulador = (acumulador + numero);
		promedio = (acumulador / contador);
	}
	document.getElementById("suma").value = (acumulador);
	document.getElementById("promedio").value = (promedio);
}//FIN DE LA FUNCIÓN