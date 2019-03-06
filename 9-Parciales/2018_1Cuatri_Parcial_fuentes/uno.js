
function mostrar()
{
    var largo = prompt("Ingrese el largo.");
    var ancho = prompt("Ingrese el ancho.");
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    var perimetro;
    perimetro = (largo * 2 + ancho * 2);
    alert("El perímetro de un rectángulo es: "+perimetro);
}
