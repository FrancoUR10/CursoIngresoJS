function mostrar()
{
//tomo la edad  

    var edad
    var estadoCivil
    var respuesta
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    estadoCivil = document.getElementById("estadoCivil").value;
    respuesta = (edad < 18) && (estadoCivil != "Soltero");
    if (respuesta)
    {
        alert("Es muy joven para NO ser soltero");
    }
}//FIN DE LA FUNCIÓN