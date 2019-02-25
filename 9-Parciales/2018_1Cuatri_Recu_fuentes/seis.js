function mostrar()
{

    var oPago
    var oPaquete
    var total=0
    var precio
    oPaquete = prompt("Ingrese opcion de paquete: 1. Todo Incluido($1000) 2. Solo Desayunos($500) 3. Económico($300)");
    switch (oPaquete)
    {
        case 1 :
            precio = 1000;
            break;
        case 2 :
            precio = 500;
            break;
        case 3 :
            precio = 300;
            break;
    }
    oPago = prompt("Ingrese opcion de pago: 1. Visa 2. PayPal 3. MercadoPago 4. Efectivo 5.Otro");
    switch (oPago)
    {
        case 1 :
            total = (precio - (precio * 10 / 100));
            break;
        case 2 :
            total = (precio - (precio * 15 / 100));
            break;
        case 3 :
            total = (precio - (precio * 10 / 100));
            break;
        case 4 :
            total = (precio - (precio * 20 / 100));
            break;
        case 5 :
            total = (precio - (precio * 5 / 100));
            break;
    }
    if (oPaquete == "1" && oPago == "2")
    {
        total = (total - (total * 10 / 100));
    }
    if (oPaquete == "2" && oPago == "4")
    {
        total = (total - (total * 10 / 100));
    }
    if (oPaquete == "1" && oPago == "4")
    {
        total = (total - (total * 15 / 100));
    }
    alert("El precio total es: "+total);
}
