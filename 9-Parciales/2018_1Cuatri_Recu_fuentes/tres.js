function mostrar()
{
    var total
    var precio = prompt("Escriba el precio en total");
    var grupo = prompt("Escriba la cantidad de amigos en el grupo");
    precio = parseInt (precio);
    grupo = parseInt (grupo);
    total = (precio * 1.10 / grupo);
    alert("En total cada uno debe pagar "+total);
}