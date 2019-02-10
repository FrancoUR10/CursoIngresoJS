function mostrar()
{
//tomo la edad

    var edad
    var respuesta
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    respuesta = (edad == 15);
    if (respuesta)
    {
    alert("Niña bonita");
    }
    
}//FIN DE LA FUNCIÓN