function mostrar()
{
    var contador=0;
    var sexo;
    while (sexo != "f" && sexo != "m" && contador < 3)
    {
        contador = (contador + 1);
        sexo = prompt("Ingrese el sexo de la persona.");
    }
    if (sexo == "f" || sexo == "m")
    {
        document.getElementById("Sexo").value = (sexo);
    }
}
//FIN DE LA FUNCIÓN