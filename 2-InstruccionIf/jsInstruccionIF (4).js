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
}//FIN DE LA FUNCIÓN