function mostrar()
{
    var precio = prompt("Escriba el total del precio");
    var libros = prompt("Cantidad de libros comprados");
    precio = parseInt (precio);
    libros = parseInt (libros);
    if (libros >= 2 && precio <= 2000)
    {
        alert("La compra es de "+precio * 10 / 100);
    }
    else
    {
        if (libros >= 2 && precio > 2000)
        {
            alert("La compra es de "+precio * 25 / 100);
        }
        else
        {
            alert("La compra es de "+precio);
        } 
    }
}
