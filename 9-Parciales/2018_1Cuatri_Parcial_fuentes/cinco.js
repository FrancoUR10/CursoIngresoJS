function mostrar()
{
  var planetas = prompt("Escriba un planeta del sistema solar.");
  switch (planetas)
  {
    case "tierra" :
      alert("Acá vivimos.");
      break;
    case "mercurio" :
    case "venus" :
      alert("Acá hace mas calor.");
      break;
    case "marte" :
    case "júpiter" :
    case "saturno" :
    case "urano" :
    case "neptuno" :
    case "plutón" :
      alert("Acá hace mas frio.");
      break;
    default :
      alert("El planeta "+planetas+" no existe o no pertenece al sistema solar.");
      break;
  }
}
