function mostrar()
{
  var suma;
  var numeroUno = prompt("Ingrese un número.");
  var numeroDos = prompt("Ingrese otro número.");
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  resta = (numeroUno - numeroDos);
  suma = (numeroUno + numeroDos);
  if (numeroUno > numeroDos)
  {
    alert("La resta es: "+resta);
  }
  else
  {
    if (numeroUno < numeroDos && suma > 10)
    {
      alert("La suma es "+suma+" y supera el 10");
    }
    else
    {
      if (suma <= 10 && numeroUno != numeroDos)
      {
        alert("La suma es: "+suma);
      }
    }
  }
  if (numeroUno == numeroDos)
  {
    alert("Los números "+numeroUno+" y "+numeroDos+" son iguales.");
  }
}
    
