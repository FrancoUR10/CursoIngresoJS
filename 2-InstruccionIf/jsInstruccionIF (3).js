function mostrar()
{
//tomo la edad

    var edad
    var resultado
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    resultado = (edad >= 18);
    if (resultado)
    {
        alert("Es mayor de edad");
    }
    else
    {
        alert("Es menor de edad"); 
    }
}//FIN DE LA FUNCIÓN