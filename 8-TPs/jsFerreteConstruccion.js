/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var perimetro
    var alambre
    var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    perimetro = (ancho * 2 + largo * 2);
    alambre = (perimetro * 3);
    alert("La cantidad de alambre a comprar es: "+alambre);
}
function Circulo () 
{
    var alambre
    var radio = document.getElementById("Radio").value;
    radio = parseInt (radio);
    (2 * 3.14 + radio)
    alambre = (radio * 3);
    alert("La cantidad de alambre a comprar es: "+alambre);
}
function Materiales () 
{
    var cantidadCemento
    var cantidadCal
    var medidas
    var area
    var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    area = (ancho * 2) + (largo * 4);
    cantidadCemento = (area * 2);
    cantidadCal = (area * 3);
    alert("Para las medidas del terreno rectangular se necesitan: "+cantidadCemento+" bolsas de cemento y "+cantidadCal+" bolsas de cal");

}