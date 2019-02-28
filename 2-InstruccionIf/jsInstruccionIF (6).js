function mostrar()
{
//tomo la edad

    var edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    if (edad >= 13 && edad <= 17)
    {
        alert("Es adolescente.");
    }
    else
    {
        if (edad < 13)
        {
            alert("Es un niño.");
        }
        else
        {
            alert("Es mayor de edad.");
        }
    }
}//FIN DE LA FUNCIÓN