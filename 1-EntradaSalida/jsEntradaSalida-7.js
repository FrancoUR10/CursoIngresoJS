/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var suma
    suma = parseInt(document.getElementById("numeroUno").value) + parseInt(document.getElementById("numeroDos").value);
    alert("La suma es "+suma);

}

function restar()
{
    var resta
    resta = parseInt(document.getElementById("numeroUno").value) - parseInt(document.getElementById("numeroDos").value);
    alert("La resta es " +resta);

}

function multiplicar()
{ 
    var multiplo
    multiplo = parseInt(document.getElementById("numeroUno").value) * parseInt(document.getElementById("numeroDos").value);
    alert("El multiplo es "+multiplo);

}

function dividir()
{
    var division
    division = parseInt(document.getElementById("numeroUno").value) / parseInt(document.getElementById("numeroDos").value);
    alert("La division es "+division);

}

