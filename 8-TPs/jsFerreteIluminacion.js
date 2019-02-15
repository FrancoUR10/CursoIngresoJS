/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precioFinal
    var precio
    var lamparas = document.getElementById("Cantidad").value;
    var marcas = document.getElementById("Marca").value;
    var descuento
    lamparas = parseInt (lamparas);
    precio = (lamparas * 35);
    descuento = document.getElementById("precioDescuento").value = precio;
    if (lamparas >= 6)
    {
        descuento = document.getElementById("precioDescuento").value = (descuento * 50 / 100);
    }
    if (lamparas == 5 && marcas == "ArgentinaLuz")
    {
        descuento = document.getElementById("precioDescuento").value = (descuento * 40 / 100);
    }
    else
    {
        if (lamparas == 5 && marcas != "ArgentinaLuz")
        {
            descuento = document.getElementById("precioDescuento").value = (descuento * 30 / 100);
        }
        else
        {
            
        }
    }
    if (lamparas == 4 && marcas == "ArgentinaLuz" || lamparas == 4 && marcas == "FelipeLamparas")
    {
        descuento = document.getElementById("precioDescuento").value = (descuento * 25 / 100);
    }
    else
    {
        if (lamparas == 4)
        {
            descuento = document.getElementById("precioDescuento").value = (descuento * 20 / 100);
        }
        else
        {

        }
    }
    if (lamparas == 3 && marcas == "ArgentinaLuz")
    {
        descuento = document.getElementById("precioDescuento").value = (descuento * 15 / 100);
    }
    else
    {
        if (lamparas == 3 && marcas == "FelipeLamparas")
        {
            descuento = document.getElementById("precioDescuento").value = (descuento * 10 / 100);
        }
        else
        {
            if (lamparas == 3)
            {
                descuento = document.getElementById("precioDescuento").value = (descuento * 5 / 100);
            }
        }
    }
    if (descuento > 120)
    {
        descuento = document.getElementById("precioDescuento").value = (descuento * 1.10);
        precioFinal = (precio * 50 / 100) + (descuento);
        alert("Usted pago: "+precioFinal);

    }
}