function mostrar()
{
    var precioFinal;
    var precio = prompt("Ingrese el precio.");
    var descuento = prompt("Ingrese el descuento");
    precio = parseInt(precio);
    descuento = parseInt(descuento);
    precioFinal = (precio - (precio * descuento / 100));
    document.getElementById("elPrecioFinal").value = (precioFinal);
}