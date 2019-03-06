function mostrar()
{
    var promedioPeso=0;
    var acumuladorPeso=0;
    var contadorPeso=0;
    var cantMenosCero=0;
    var marcaMaxima;
    var maximo;
    var minimo;
    var bandera=true;
    var cantTemperaturaPar=0;
    var temperaturaValida;
    var pesoValido;
    var marca;
    var peso;
    var temperatura;
    do
    {
        marca = prompt("Ingrese una marca.");
        pesoValido = false;
        while (pesoValido == false)
        {
            peso = prompt("Ingrese el peso del producto.");
            peso = parseInt(peso);
            if (peso < 1 || peso > 100)
            {
                alert("El peso "+peso+" no es valido.");
            }
            else
            {
                if (peso >= 1 && peso <= 100)
                {
                    pesoValido = true;
                }
            }
        }
        temperaturaValida = false;
        while (temperaturaValida == false)
        {
            temperatura = prompt("Ingrese la temperatura.");
            temperatura = parseInt(temperatura);
            if (temperatura < -30 || temperatura > 30)
            {
                alert("La temperatura "+temperatura+" no es valida.");
            }
            else
            {
                if (temperatura >= -30 && temperatura <= 30)
                {
                    temperaturaValida = true;
                }
            }
        }
        if (temperatura % 2 == 0)
        {
            cantTemperaturaPar = (cantTemperaturaPar + 1);
        }
        if (bandera == true)
        {
            maximo = (peso);
            minimo = (peso);
            marcaMaxima = (marca);
            bandera = false;
        }
        if (peso > maximo)
        {
            maximo = (peso);
            marcaMaxima = (marca);
        }
        if (peso < minimo)
        {
            minimo = (peso);
        }
        if (temperatura < 0)
        {
            cantMenosCero = (cantMenosCero + 1);
        }
        contadorPeso = (contadorPeso + 1);
        acumuladorPeso = (acumuladorPeso + peso);
        promedioPeso = (acumuladorPeso / contadorPeso);
    } while (confirm("¿Desea añadir mas datos?"));
    document.write("Cantidad de temperaturas pares: "+cantTemperaturaPar+
    " Marca del producto mas pesado: "+marcaMaxima+
    " Cantidad productos bajo cero: "+cantMenosCero+
    " Promedio del peso de todos los productos: "+promedioPeso+
    " Peso máximo: "+maximo+" Peso mínimo: "+minimo);
}