function mostrar()
{
    var contador=0;
    var clave;
    while (clave != "utn750" && contador < 3)
    {
        contador = (contador + 1);
        clave = prompt("Ingrese la clave.");
        if (clave != "utn750")
        {
            alert("Clave incorrecta.");
        }
    }
    if (clave != "utn750")
    {
        alert("Pasaron los tres intentos.");
    }
    else
    {
        if (clave == "utn750")
        {
            alert("Clave correcta.");
        }
    }
}
//FIN DE LA FUNCIÓN