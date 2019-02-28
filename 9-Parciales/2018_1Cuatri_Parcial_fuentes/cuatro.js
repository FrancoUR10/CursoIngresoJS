function mostrar()
{
  var suma
  var resta
  var numeroUno = prompt("Ingrese un número.");
  var numeroDos = prompt("Ingrese otro número.");
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  if (numeroUno == numeroDos)
  {
    alert("El número "+numeroUno+" y "+numeroDos+" son iguales.");
  }
  else
  {
    if (numeroUno > numeroDos)
    {
      resta = (numeroUno - numeroDos);
      alert("La resta de "+numeroUno+" y "+numeroDos+" es: "+resta);
    }
    else
    {
      suma = (numeroUno + numeroDos);
      alert("La suma de "+numeroUno+" y "+numeroDos+" es: "+suma);
    }
  }
  if (suma > 10)
  {
    alert("La suma "+suma+" supero el 10");
  }
}
