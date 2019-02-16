function mostrar()
{
    var iva
    var descuento
    var compra = prompt("Escriba el precio de compra");
    compra = parseInt (compra);
    descuento = (compra * 10 / 100);
    iva = (descuento * 1.21);
    alert("La compra es de "+compra+" tenes un descuento del 10% queda en "+descuento+" más el Iva es de "+iva);
}