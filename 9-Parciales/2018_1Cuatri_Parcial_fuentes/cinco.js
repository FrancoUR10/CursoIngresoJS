function mostrar()
{
  var planeta = prompt("Ingrese un planeta del sistema solar.");
  switch (planeta)
  {
    case "mercurio" :
    case "venus" :
      alert("Acá hace más calor.");
      break;
    case "tierra" :
      alert("Acá vivimos.");
      break;
    case "marte" :
    case "júpiter" :
    case "saturno" :
    case "urano" :
    case "neptuno" :
    case "plutón" :
      alert("Acá hace más frio.");
      break;
    default :
      alert("El planeta "+planeta+" no existe o pertenece al sistema solar.");
  }
}
// tierra/mercurio/venus/marte/júpiter/saturno/urano/neptuno/plutón
