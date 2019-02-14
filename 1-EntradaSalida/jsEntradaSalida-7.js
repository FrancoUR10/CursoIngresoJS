/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var resultado
    var primera = document.getElementById("numeroUno").value;
    var segunda = document.getElementById("numeroDos").value;
    primera = parseInt (primera);
    segunda = parseInt (segunda);
    resultado = (primera + segunda);
    alert("La suma es "+resultado);

}

function restar()
{
    var resultado
    var primera = document.getElementById("numeroUno").value;
    var segunda = document.getElementById("numeroDos").value;
    primera = parseInt (primera);
    segunda = parseInt (segunda);
    resultado = (primera - segunda);
    alert("La resta es "+resultado);

}

function multiplicar()
{
    var resultado
    var primera = document.getElementById("numeroUno").value;
    var segunda = document.getElementById("numeroDos").value;
    primera = parseInt (primera);
    segunda = parseInt (segunda);
    resultado = (primera * segunda);
    alert("La multiplicacion es "+resultado);

}

function dividir()
{
    var resultado
    var primera = document.getElementById("numeroUno").value;
    var segunda = document.getElementById("numeroDos").value;
    primera = parseInt (primera);
    segunda = parseInt (segunda);
    resultado = (primera / segunda);
    alert("La division es "+resultado);
    
}

