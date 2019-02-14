/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var suma
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);
    suma = (precioUno + precioDos + precioTres);
    alert("La suma es: "+suma);
}
function Promedio () 
{
    var suma
    var promedio
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);
    suma = (precioUno + precioDos + precioTres);
    promedio = (suma );
    alert("El promedio es: "+promedio);
}
function PrecioFinal () 
{
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);
    suma = (precioUno + precioDos + precioTres);
    iva = (suma * 0.21);
    alert("El precio final más el Iva es: "+iva);
}