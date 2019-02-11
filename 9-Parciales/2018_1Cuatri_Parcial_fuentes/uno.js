
function mostrar()
{
    var ancho
    var largo
    var perimetro
    ancho = prompt("Escriba el ancho de un rectángulo");
    largo = prompt("Escriba el largo de un rectángulo");
    ancho = parseInt (ancho);
    largo = parseInt (largo);
    perimetro = (ancho * 2) + (largo * 4);
    alert("El perimetro de un rectángulo es: "+perimetro);
}
