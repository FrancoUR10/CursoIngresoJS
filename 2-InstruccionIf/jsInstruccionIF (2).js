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
}//FIN DE LA FUNCIÓN