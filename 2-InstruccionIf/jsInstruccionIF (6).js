function mostrar()
{
//tomo la edad  

    var edad
    var resultado
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    resultado = (edad >= 13) && (edad <= 17);
    if (resultado)
    {
        alert("Es adolescente");
    }
    else
    {
        if (edad < 13)
        {
            alert("Es un niño");
        }
        if (edad >= 18)
        {
            alert("Es mayor de edad");
        }
    }
}//FIN DE LA FUNCIÓN