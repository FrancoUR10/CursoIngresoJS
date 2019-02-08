function mostrar()
{
    var precio = document.getElementById("elPrecioFinal").value;
    precio = parseInt (precio);
    precio = document.getElementById("elPrecioFinal").value = precio - (precio * 50/100);
    prompt("El porcentaje de descuento es "+precio);

}
{
    var precio
    var descuento
    var precioFinal
    prompt("Ingrese "+precio);
    prompt("Ingrese "+descuento);
    precioFinal = precio -(precio * descuento /100);
    
}
