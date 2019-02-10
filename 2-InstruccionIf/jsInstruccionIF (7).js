function mostrar()
{
//tomo la edad  

    var edad
    var resultado
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    resultado = document.getElementById("estadoCivil").value;
    resultado = (edad < 18);

}//FIN DE LA FUNCIÓN