function mostrar()
{
    var compraConDescuento
    var compraDescuentoIva
    var iva
    var descuento
    var compra = prompt("Escriba el precio de compra");
    compra = parseInt (compra);
    descuento = (compra * 10 / 100);
    compraConDescuento = (compra - descuento);
    iva = (compraConDescuento * 21 / 100);
    compraDescuentoIva = (compraConDescuento + iva);
    alert("La compra es de "+compra+" tenes un descuento del 10% queda en "+compraConDescuento+
    " más el Iva es de "+compraDescuentoIva);
}