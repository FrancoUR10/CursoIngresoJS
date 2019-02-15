/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var alambre
    var perimetro
    var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    perimetro = (largo * 2 + ancho * 2);
    alambre = (perimetro * 3);
    alert("La cantidad de alambre a comprar es: "+alambre);

}
function Circulo () 
{
    var alambre
    var perimetro
    var radio = document.getElementById("Radio").value;
    radio = parseInt (radio);
    perimetro = (2 + 3.14 * radio);
    alambre = (perimetro * 3);
    alert("La cantidad de alambre a comprar es: "+alambre);

}
function Materiales () 
{
    var area
    var cemento
    var cal
    var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    area = (largo * ancho);
    cemento = (area * 2);
    cal = (area * 3);
    alert("Para el contrapiso se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}