function mostrar()
{

	var numero
	var contador=0;
	var positivo=0;
  var negativo=-1;
  var respuesta;
  do
  {
    numero = prompt("Ingrese un número");
    numero = parseInt (numero);
		if (numero > 0)
		{
      positivo = (positivo + numero);
		}
		else
		{
      if (numero < 0)
			{
        contador = (contador + 1);
				negativo = (negativo * numero);
			}
		}
  }
  while (respuesta = confirm("¿Desea ingresar otro número?"));


document.getElementById('suma').value=positivo;
if (contador > 0)
{
	document.getElementById('producto').value=negativo;
}
else
{
	negativo = 0;
	document.getElementById("producto").value=negativo;
}
}//FIN DE LA FUNCIÓN
