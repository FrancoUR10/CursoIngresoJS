function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var aleatorio = 1 + Math.round(Math.random() * 9);
	alert("El número es: "+aleatorio);
	if (aleatorio < 4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if (aleatorio <= 8)
		{
			alert("Aprobó");
		}
		else
		{
			alert("Excelente");
		}
	}

}//FIN DE LA FUNCIÓN