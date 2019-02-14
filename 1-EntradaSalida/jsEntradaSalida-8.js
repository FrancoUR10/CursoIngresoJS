/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()

{
    var resultado
    var primera = document.getElementById("numeroDividendo").value;
    var segunda = document.getElementById("numeroDivisor").value;
    primera = parseInt (primera);
    segunda = parseInt (segunda);
    resultado = (primera % segunda);
    alert("El resto entre el dividendo y el divisor es "+resultado);
    
}