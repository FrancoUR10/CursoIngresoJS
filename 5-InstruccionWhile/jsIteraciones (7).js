function mostrar()
{
	var respuesta;
	var cantidad = 0;
	var contador = 0;
	var acumulador = 0;
  do
  {
		contador = (contador + 1);
		cantidad = prompt("Ingrese un número.");
		cantidad = parseInt (cantidad);
		acumulador = (acumulador + cantidad);
  }
  while (respuesta = confirm("¿Desea ingresar otro número?"));
	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = (acumulador / contador);
	
}//FIN DE LA FUNCIÓN