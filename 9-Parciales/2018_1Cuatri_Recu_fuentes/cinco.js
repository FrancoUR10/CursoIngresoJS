function mostrar()
{
    var total=0;
    var importeUno = prompt("Escriba el primer importe");
    var importeDos = prompt("Escriba el segundo importe");
    var importeTres = prompt("Escriba el tercer importe");
    var importeCuatro = prompt("Escriba el cuarto importe");
    importeUno = parseInt (importeUno);
    importeDos = parseInt (importeDos);
    importeTres = parseInt (importeTres);
    importeCuatro = parseInt (importeCuatro);
    mayor = (importeUno);
    if (importeDos > mayor)
    {
        mayor = (importeDos);
    }
    if (importeTres > mayor)
    {
        mayor = (importeTres);
    }
    if (importeCuatro > mayor)
    {
        mayor = (importeCuatro);
    }
    if (mayor > 100)
    {
        total = (mayor - (mayor * 10 / 100));
    }
    else
    {
        if (mayor > 50)
        {
            total = (mayor - (mayor * 50 / 100));
        }
        else
        {
            total = (mayor * 1.15);
        }
    }
    alert("El mayor es: "+mayor);
    alert("El total de importe es: "+total);
}