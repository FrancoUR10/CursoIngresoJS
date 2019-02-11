function mostrar()
{
    var precio
    var descuento
    var resultado
    precio = prompt("Escriba el precio");
    descuento = prompt("Escriba el descuento");
    precio = parseInt (precio);
    descuento = parseInt (descuento);
    resultado = document.getElementById("elPrecioFinal").value = (precio * descuento / 100);
}
