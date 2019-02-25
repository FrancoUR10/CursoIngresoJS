function mostrar()
{
    var precioTotal;
    var pagoTarjeta;
    var precioValor=0
    var precioCantidad=0;
    var precio = prompt("Escriba el total a pagar");
    var libros = prompt("Cantidad de libros comprados");
    precio = parseInt (precio);
    libros = parseInt (libros);
    if (libros >= 2 && precio <= 2000)
    {
        precioCantidad = (precio - (precio * 10 / 100));
        precioTotal = (precioCantidad);
    }
    else
    {
        if (libros >= 2 && precio > 2000)
        {
            precioCantidad = (precio - (precio * 10 / 100));
            precioValor = (precioCantidad - (precioCantidad * 15 / 100))
            precioTotal = (precioValor);
        }
        else
        {
            precioTotal = (precio);
        } 
    }
    pagoTarjeta = prompt("¿Paga con tarjeta?");
    if (pagoTarjeta == "si")
    {
        precioTotal = (precioTotal * 1.10);
    }
    alert("El precio total es de: "+precioTotal);
}
