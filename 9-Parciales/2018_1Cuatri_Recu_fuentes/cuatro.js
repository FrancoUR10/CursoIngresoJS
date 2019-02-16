function mostrar()
{
    var precio = prompt("Escriba el total a pagar");
    var pagoTarjeta = prompt("Escriba el total a pagar con tarjeta");
    var libros = prompt("Cantidad de libros comprados");
    precio = parseInt (precio);
    pagoTarjeta = parseInt (pagoTarjeta);
    libros = parseInt (libros);
    pagoTarjeta = (pagoTarjeta * 1.10);
    if (libros >= 2 && precio <= 2000)
    {
        alert("La compra es de "+precio * 10 / 100);
    }
    else
    {
        if (libros >= 2 && precio > 2000)
        {
            alert("La compra es de "+precio * 15 / 100);
        }
        else
        {
            alert("La compra es de "+precio);
        } 
    }
    if (libros >= 2 && pagoTarjeta <= 2000)
    {
        alert("La compra con tarjeta es de "+pagoTarjeta * 10 / 100);
    }
    else
    {
        if (libros >= 2 && pagoTarjeta > 2000)
        {
            alert("La compra con tarjeta es de "+pagoTarjeta * 15 / 100);
        }
        else
        {
            alert("La compra con tarjeta es de "+pagoTarjeta);
        }
    }
}
