function mostrar()
{
    var acumulador=0;
    var promedio=0;
    var contador=0;
    var menor=0;
    var velocidad;
    var combustible;
    while (contador < 5)
    {
        contador = (contador + 1);
        velocidad = prompt("Escriba la velocidad.");
        velocidad = parseInt(velocidad);
        combustible = prompt("Escriba el tipo de combustible.");
        if (velocidad >= 0 && velocidad <= 250)
        {
            acumulador = (velocidad + acumulador);
            promedio = (acumulador / contador);
        }
        if (velocidad < menor)
        {
            menor = (velocidad);
        }
        if (combustible == "l" || combustible == "s")
        {
            menor = (combustible);
        }
    }

    alert("El promedio de las velocidades totales es: "+promedio);
    alert("La menor cantidad es: "+menor);
}
