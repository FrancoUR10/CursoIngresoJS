function mostrar()
{
    var sexo = prompt("ingrese f ó m .");
    while (sexo != "exit")
    {   
        if (sexo == "f")
        {
            alert("El sexo es Femenino");
        }
        else
        {
            if (sexo == "m")
            {
                alert("El sexo es Masculino");
            }
            else
            {
                alert("No es ni Femenino ni Masculino");
            }
        }
        sexo = prompt("ingrese f ó m .");
        document.getElementById('Sexo').value=sexo;
    }
}//FIN DE LA FUNCIÓN