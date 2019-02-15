
function mostrar()
{
    var pesoTotal
    var mascotaUno = prompt("Nombre de su primera mascota");
    var pesoUno = prompt("Escriba el peso de su primera mascota");
    var mascotaDos = prompt("Nombre de su segunda mascota");
    var pesoDos = prompt("Escriba el peso de su segunda mascota");
    pesoUno = parseInt (pesoUno);
    pesoDos = parseInt (pesoDos);
    pesoTotal = (pesoUno + pesoDos);
    alert("Tenes dos mascotas "+mascotaUno+" y "+mascotaDos+", que pesan: "+pesoUno+" y "+pesoDos+" la suma de los kilos es: "+pesoTotal);
}
