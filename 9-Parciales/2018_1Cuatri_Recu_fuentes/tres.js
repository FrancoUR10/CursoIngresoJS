function mostrar()
{
    var precio = document.getElementById("elPrecioFinal").value;
    precio = parseInt (precio);
    var grupo = prompt("El grupo de amigos");
    grupo = parseInt (grupo);
    grupo = (grupo + 10 / 100);
    total = (precio / grupo);
    alert("En total cada uno debe pagar "+total);
}