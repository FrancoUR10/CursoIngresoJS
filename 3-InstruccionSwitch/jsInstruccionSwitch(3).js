function mostrar()
{
//tomo la edad

  var mes = document.getElementById("mes").value;
  switch (mes)
  {
    case "Febrero" :
      alert(mes+" no tiene más de 29 días.");
      break;
    default :
      alert(mes+" tiene 30 o más días.");
      break;
  }

//alert (mesDelAño);
}//FIN DE LA FUNCIÓN
