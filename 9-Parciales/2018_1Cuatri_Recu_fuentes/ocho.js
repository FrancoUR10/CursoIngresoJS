function mostrar()
{
    var paisMenor=0;
    var menor = (superficie);
    var paisMayor=0;
    var promedio=0;
    var contador=0;
    var paisesIgual100=0;
    var paisesMenor100=0;
    var paisesImpares=0;
    var superficie;
    var pais;
    var paises=0;
    var acumulador=0;
    var respuesta;
    do
    {
        contador = (contador + 1);
        pais = prompt("Escriba un pais");
        superficie = prompt("Escriba su superficie.");
        superficie = parseInt(superficie);
        if (superficie > 0)
        {
            acumulador = (acumulador + superficie);
            promedio = (acumulador / contador);
        }
        if (superficie % 2)
        {
            paisesImpares = (paisesImpares + 1);
        }
        if (superficie < 100)
        {
            paisesMenor100 = (paisesMenor100 + 1);
        }
        if (superficie == 100)
        {
            paisesIgual100 = (paisesIgual100 + 1);
        }
        if (superficie > 100)
        {
            paisMayor = (paisMayor = 1);
        }
        if (superficie < menor)
        {
            menor = (superficie);
            paisMenor = (paisMenor + 1);
        }
    }
    while (respuesta = confirm("¿Desea agregar otro país?"));
    document.write("Paises impares: "+paisesImpares+
    " Paises menores a 100: "+paisesMenor100+
    " Paises iguales a 100: "+paisesIgual100+
    " Promedio de kilómetros ingresados: "+promedio+
    " Primer país mayor: "+paisMayor+
    " País menor: "+paisMenor);
}
