function mostrar()
{
  var cantidadM=0;
  var flag=true;
  var minimo;
  var contador=0;
  var promedio=0;
  var acumulador=0;
  var sexoValido;
  var notaValida;
  var nota;
  var sexo;
  for (var i=0; i<5; i++)
  {
    notaValida = false;
    while (notaValida == false)
    {
      nota = prompt("Ingrese la nota del examen.");
      nota = parseInt(nota);
      if (nota < 0 || nota > 10)
      {
        alert("La nota "+nota+" no es valida");
      }
      else
      {
        if (nota >= 0 && nota <= 10)
        {
          notaValida = true;
        }
        else
        {
          alert("La nota ingresada no es un número.");
        }
      }
    }
    sexoValido = false;
    while (sexoValido == false)
    {
      sexo = prompt("Ingrese el sexo del alumno/a.");
      if (sexo != "f" && sexo != "m")
      {
        alert("El sexo "+sexo+" no es valido.");
      }
      else
      {
        sexoValido = true;
      }
    }
    contador = (contador + 1);
    acumulador = (acumulador + nota);
    promedio = (acumulador / contador);
    if (flag == true)
    {
      minimo = (nota);
      flag = false;
    }
    if (nota < minimo)
    {
      minimo = (nota);
    }
    if (sexo == "m" && nota >= 6)
    {
      cantidadM = (cantidadM + 1);
    }
  }
  alert("El promedio de las notas totales es: "+promedio);
  alert("La nota mas baja es "+minimo+" y el sexo de esa persona es "+sexo);
  alert("La cantidad de varones cuya nota fue mayor o igual a 6 es de "+cantidadM+" varones.");
}