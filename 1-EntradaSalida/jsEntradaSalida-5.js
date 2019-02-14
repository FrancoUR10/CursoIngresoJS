/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
    var nombre = document.getElementById("elNombre").value;
    var años = document.getElementById("laEdad").value;
    alert("Su nombre es "+nombre+" y tiene "+años+" años");
    
}