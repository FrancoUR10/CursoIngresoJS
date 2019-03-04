function mostrar()
{
	var contador=0;
	var numero;
	//numero = prompt("Ingrese un número entre 0 y 9");
	//numero = parseInt(numero);
	do
	{
		contador = (contador + 1);
		numero = prompt("Ingrese un número entre 0 y 9");
		numero = parseInt(numero);
	} while (numero < 0 || numero > 9 && contador < 3);
	if (numero >= 0 && numero <= 9)
	{
		document.getElementById("Numero").value = (numero);
	}
}
//FIN DE LA FUNCIÓN

/*
Para validar un numero, se requerira usar "do while".
En caso de utilizar solamente while, se debera pedir el numero antes y durante while.
*/