
function mostrar()
{
    var kilogramos
    var suma
    var mascotaUno = prompt("Nombre de su primera mascota");
    var pesoUno = prompt("Peso de su primera mascota");
    var mascotaDos = prompt("Escriba el nombre de su segunda mascota");
    var pesoDos = prompt("Peso de su segunda mascota");
    pesoUno = parseInt (pesoUno);
    pesoDos = parseInt (pesoDos);
    suma = (pesoUno + pesoDos);
    kilogramos = (suma * 1 / 1000);
    alert("Tenes dos mascotas "+mascotaUno+" y "+mascotaDos+", que pesan: "+pesoUno+" y "+pesoDos+" la suma de los kilogramos es: "+kilogramos);
    
}
