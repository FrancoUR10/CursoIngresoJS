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
// respuesta = confirm();
// while (isNaN(numero));
/*
do
{
  numero = prompt();
  numero = parseInt(numero);
}
while (isNaN(numero));
(El comando: "do while" debe empezar con "do" y continuar con "while";
su función es ejecutar la ecuación primero y después evalua la condición.)
*/
/*
var bandera
if (bandera == true){}
(La variable "bandera" se puede utilizar
para comprobar cual es el número mayor y el número menor.)
*/
// https://docs.google.com/forms/d/e/1FAIpQLSd8P71cuY0V2ZXOE_IwvHS5hBXo4W8g9Xw8fw_sDi7BkZXE6Q/viewform
