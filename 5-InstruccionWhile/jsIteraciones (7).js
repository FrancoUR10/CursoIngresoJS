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

/*
1-en siete.js,
Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido

2-en ocho.js, .
Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.
*/