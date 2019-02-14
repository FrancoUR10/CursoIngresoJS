function mostrar()
{
//tomo la edad  


    var edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    if (edad < 13)
    {
        alert("Es un niño");
    }
    else
    {
        if (edad >= 18)
        {
            alert("Es mayor de edad");
        }
        else
        {
            alert("Es un adolescente");
        }
    }
}//FIN DE LA FUNCIÓN