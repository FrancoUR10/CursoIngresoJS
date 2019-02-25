function mostrar()
{
	//declarar contadores y variables 
	
	var numero;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferenciaSumas=0;
	var diferenciaCantidad=0;

	var respuesta="si";
	while(respuesta!='no')
	{
		numero = prompt("Escriba un número");
		numero = parseInt (numero);
		if (numero > 0)
		{
			sumaPositivos = (sumaPositivos + numero);
			cantidadPositivos = (cantidadPositivos + 1);
			promedioPositivos = (sumaPositivos / cantidadPositivos);
		}
		if (numero < 0)
		{
			sumaNegativos = (sumaNegativos + numero);
			cantidadNegativos = (cantidadNegativos + 1);
			promedioNegativos = (sumaNegativos / cantidadNegativos);
		}
		if (numero == 0)
		{
			cantidadCeros = (cantidadCeros + 1);
		}
		if (numero % 2 == 0)
		{
			cantidadPares = (cantidadPares + 1);
		}
		respuesta = prompt("¿Desea escribir otro número?");
	}
	diferenciaSumas = (sumaPositivos + sumaNegativos);
	diferenciaCantidad = (cantidadPositivos - cantidadNegativos);
	document.write("Suma de positivos: "+sumaPositivos+" Suma de negativos: "+sumaNegativos+
	" Cantidad de positivos: "+cantidadPositivos+" Cantidad de negativos: "+cantidadNegativos+
	" Cantidad de ceros: "+cantidadCeros+" Cantidad de pares: "+cantidadPares+
	" Promedio de positivos: "+promedioPositivos+" Promedio de negativos: "+promedioNegativos+
	" Diferencia entre positivos y negativos: "+diferenciaSumas+
	" Diferencia entre cantidad de positivos y negativos: "+diferenciaCantidad);


}//FIN DE LA FUNCIÓN