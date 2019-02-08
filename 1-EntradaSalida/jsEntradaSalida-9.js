/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{
var mario = document.getElementById("sueldo").value;
Mario = parseInt (mario);

var resultado = document.getElementById("resultado").value = (mario * 1.10);

}