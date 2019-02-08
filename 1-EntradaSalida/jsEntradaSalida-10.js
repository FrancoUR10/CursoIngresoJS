/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var mario
    mario = document.getElementById("importe").value;
    mario = parseInt(mario);
    var resultado = document.getElementById("resultado").value = mario - (mario * 25)/100;
    

}
