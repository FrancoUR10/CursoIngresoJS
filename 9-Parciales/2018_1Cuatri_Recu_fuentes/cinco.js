function mostrar()
{
    var mayorImporte
    var importeUno = prompt("Escriba el primer importe");
    var importeDos = prompt("Escriba el segundo importe");
    var importeTres = prompt("Escriba el tercer importe");
    var importeCuatro = prompt("Escriba el cuarto importe");
    importeUno = parseInt (importeUno);
    importeDos = parseInt (importeDos);
    importeTres = parseInt (importeTres);
    importeCuatro = parseInt (importeCuatro);
    mayorImporte = Math.max(importeUno, importeDos, importeTres, importeCuatro);
    switch (mayorImporte)
    {
        case 0 :
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        case 7 :
        case 8 :
        case 9 :
            alert("El importe es: "+mayorImporte);
            break;

        case 10 :
        case 11 :
        case 12 :
        case 13 :
        case 14 :
            alert("El importe con 15% de aumento es: "+mayorImporte * 1.15);
            break;
            
        case 15 :
        case 16 :
        case 17 :
        case 18 :
        case 19 :
        case 20 :
        case 21 :
        case 22 :
        case 23 :
        case 24 :
        case 25 :
        case 26 :
        case 27 :
        case 28 :
        case 29 :
            alert("El importe con 15% de aumento es: "+mayorImporte * 1.15);
            break;
            
        case 30 :
        case 31 :
        case 32 :
        case 33 :
        case 34 :
        case 35 :
        case 36 :
        case 37 :
        case 38 :
        case 39 :
            alert("El importe con 50% de descuento es: "+mayorImporte * 50 / 100);
            break;
            
        default :
            alert("El importe con 10% de descuento es: "+mayorImporte * 10 / 100);
            break;
    }
}