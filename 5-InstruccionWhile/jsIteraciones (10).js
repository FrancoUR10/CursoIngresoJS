function mostrar()
{
	//declarar contadores y variables

	var diferencia=0;
	var promedioNegativo=0;
	var promedioPositivo=0;
	var cantidadPar=0;
	var cantidadCeros=0;
	var cantidadNegativo=0;
	var cantidadPositivo=0;
	var sumaPositivo=0;
	var sumaNegativo=0;
	var numero;
	var respuesta;
	do
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		if (numero < 0)
		{
			cantidadNegativo = (cantidadNegativo + 1);
			sumaNegativo = (sumaNegativo + numero);
			promedioNegativo = (sumaNegativo / cantidadNegativo);
		}
		else
		{
			cantidadPositivo = (cantidadPositivo + 1);
			sumaPositivo = (sumaPositivo + numero);
			promedioPositivo = (sumaPositivo / cantidadPositivo);
		}
		if (numero == 0)
		{
			cantidadCeros = (cantidadCeros + 1);
		}
		if (numero % 2 == 0)
		{
			cantidadPar = (cantidadPar + 1);
		}
	}
	while (respuesta = confirm("¿Desea ingresar otro número?"));
	diferencia = (sumaPositivo + sumaNegativo);
	document.write("Suma negativos: "+sumaNegativo+" Suma positivos: "+sumaPositivo+
	" Cantidad positivos: "+cantidadPositivo+" Cantidad negativos: "+cantidadNegativo+
	" Cantidad ceros: "+cantidadCeros+" Cantidad pares: "+cantidadPar+
	" Promedio positivos: "+promedioPositivo+" Promedio negativos: "+promedioNegativo+
	" Diferencia entre positivos y negativos: "+diferencia);
}//FIN DE LA FUNCIÓN