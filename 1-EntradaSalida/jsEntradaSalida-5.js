/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var mario
    var años
    mario = document.getElementById("elNombre").value;
    años = parseInt(document.getElementById("laEdad").value);
    alert("Usted se llama "+mario+" y tiene "+años+" años");

}