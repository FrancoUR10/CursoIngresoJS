/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var mario
	mario = prompt("Escriba");
	document.getElementById("elNombre").value=mario;
	
}

