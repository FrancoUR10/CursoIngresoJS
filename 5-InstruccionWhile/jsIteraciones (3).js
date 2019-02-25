function mostrar()
{
    var cantidad = 0
    var clave
    while (clave != "utn750" && cantidad < 3)
    {
        clave = prompt("Ingrese la clave.");
        cantidad = (cantidad + 1);
        if (clave != "utn750")
        {
            alert("Clave incorrecta.");
        }
    }
    if (clave == "utn750")
        alert("Clave correcta.");
    else
    {
        if (cantidad == 3)
        {
            alert("Pasaron los tres intentos.");
        }
    }
}//FIN DE LA FUNCIÓN