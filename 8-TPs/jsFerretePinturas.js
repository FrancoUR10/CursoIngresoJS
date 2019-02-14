/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var celcius
    var fahrenheit = document.getElementById("Temperatura").value;
    fahrenheit = parseInt (fahrenheit);
    celcius = (fahrenheit - 32) / 1.8;
    alert("La temperatura en fahrenheit a celcius es: "+celcius);
}

function CentigradosFahrenheit () 
{
    var fahrenheit
    var celcius = document.getElementById("Temperatura").value;
    celcius = parseInt (celcius);
    fahrenheit = (celcius * 1.8) + 32;
    alert("La temperatura en celcius a Fahrenheit es: "+fahrenheit);
}
