/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var resultado
    var primera = document.getElementById("numeroUno").value;
    var segunda = document.getElementById("numeroDos").value;
    primera = parseInt(primera);
    segunda = parseInt(segunda);
    resultado = (primera + segunda);
    alert("La suma de "+primera+" y "+segunda+" es "+resultado);
    
}