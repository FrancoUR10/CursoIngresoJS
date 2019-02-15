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
    alert("El precio final es: "+suma);
    
}
function Promedio () 
{
    var promedio
    var suma
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);
    suma = (precioUno + precioDos + precioTres);
    promedio = (suma / 3);
    alert("El promedio del precio final es: "+promedio);
    
}
function PrecioFinal () 
{
    var iva
    var suma
    var precioUno = document.getElementById("PrecioUno").value;
    var precioDos = document.getElementById("PrecioDos").value;
    var precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);
    suma = (precioUno + precioDos + precioTres);
    iva = (suma * 1.21);
    alert("El precio final más el Iva es: "+iva);

}