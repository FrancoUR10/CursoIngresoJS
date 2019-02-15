function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var random = Math.floor(Math.random()*10)+1;
	alert("El número random es: "+random);
	if (random < 4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if (random <= 8)
		{
			alert("Aprobó");
		}
		else
		{
			alert("Excelente");
		}
	}

}//FIN DE LA FUNCIÓN