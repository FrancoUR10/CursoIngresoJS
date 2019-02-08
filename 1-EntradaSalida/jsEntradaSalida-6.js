/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var mario
    mario = parseInt(document.getElementById("numeroUno").value) + parseInt(document.getElementById("numeroDos").value);
    alert("La suma es "+mario);
    
}