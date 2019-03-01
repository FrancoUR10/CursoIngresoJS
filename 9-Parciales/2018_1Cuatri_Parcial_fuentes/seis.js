function mostrar()
{
  var hora = document.getElementById("laHora").value;
  hora = parseInt(hora);
  switch (hora)
  {
    case 6 :
    case 7 :
    case 8 :
    case 9 :
    case 10 :
    case 11 :
      alert("Las "+hora+" horas es de mañana.");
      break;
    case 12 :
    case 13 :
    case 14 :
    case 15 :
    case 16 :
    case 17 :
    case 18 :
    case 19 :
      alert("Las "+hora+" horas es de tarde.");
      break;
  }
  if (hora < "12" || hora > "19")
  {
    alert("Las "+hora+" horas es de noche.");
  }
}
