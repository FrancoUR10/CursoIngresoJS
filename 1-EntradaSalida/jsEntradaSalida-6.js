/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primera
    var segunda
    var resultado
    primera = document.getElementById("numeroUno").value;
    segunda = document.getElementById("numeroDos").value;
    primera = parseInt(primera);
    segunda = parseInt(segunda);
    resultado = (primera + segunda);
    alert("La suma de "+primera+" y "+segunda+" es "+resultado);
    
}