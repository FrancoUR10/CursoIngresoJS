function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var aleatorio
	var excelente
	aleatorio = 1 + Math.round(Math.random() * 9);
	alert("El número es "+aleatorio);
	excelente = (aleatorio >= 9) && (aleatorio <= 10);
	if (excelente)
	{
		alert("Excelente");
	}
	else if (aleatorio >= 4)
	{
		alert("Aprobó");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN