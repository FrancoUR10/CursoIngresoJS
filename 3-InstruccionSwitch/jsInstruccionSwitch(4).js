function mostrar()
{
//tomo la edad

  var mes = document.getElementById("mes").value;
  switch (mes)
  {
    case "Enero" :
    case "Marzo" :
    case "Mayo" :
    case "Julio" :
    case "Agosto" :
    case "Octubre" :
    case "Diciembre" :
      alert(mes+" tiene 31 días.");
      break;
    case "Febrero" :
      alert(mes+" tiene 28 días.");
      break;
    default :
      alert(mes+" tiene 30 días.");
      break;
  }
//alert (mesDelAño);

}//FIN DE LA FUNCIÓN