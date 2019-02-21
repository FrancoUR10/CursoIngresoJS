function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
  case ("Febrero") :
    alert(mesDelAño+" tiene más de 29 días.");
    break;

  default :
    alert(mesDelAño+" tiene 30 o más días.");
    break;
}



//alert (mesDelAño);
}//FIN DE LA FUNCIÓN
