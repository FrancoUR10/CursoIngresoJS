function mostrar()
{
  var promedio
  var notaBaja
  var acumulador
  var alumnos=0;
  var notas;
  var genero;
  genero = prompt("Escriba el sexo del alumno/a.");
  genero = parseInt(genero);
  while (notas < 0 || notas > 10 && genero != "f" || genero != "m" && alumnos < 5)
  {
    alumnos = (alumnos + 1);
    notas = prompt("Escriba la nota del examen.");
    notas = parseInt(notas);
  if (notas >= 1 && notas <= 10)
  {
    acumulador = (acumulador + 1);
    promedio = (notas / alumnos);
  }
}
alert("El promedio de las notas es: "+promedio);
if (notas < notaBaja)
{
  notaBaja = (notas);
}
alert("La nota mas baja es: ")
}
