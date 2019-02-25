function mostrar()
{
    var propina
    var total
    var precio = prompt("Escriba el precio en total");
    var grupo = prompt("Escriba la cantidad de amigos en el grupo");
    precio = parseInt (precio);
    grupo = parseInt (grupo);
    propina = (precio * 10 / 100);
    total = (precio + propina) / grupo;
    alert("En total cada uno debe pagar "+total);
}