function mostrar()
{
    var bandera=true;
    var maximo;
    var minimo;
    var acumuladorNegativos=0;
    var promedioPositivos=0;
    var acumuladorPositivos=0;
    var cantidadPositivos=0;
    var cantidadCeros=0;
    var cantidadImpares=0;
    var cantidadPares=0;
    var letraValida;
    var numeroValido;
    var numero;
    var letra;
    do
    {
        numeroValido = false;
        while (numeroValido == false)
        {
            numero = prompt("Ingrese un número.");
            numero = parseInt(numero);
            if (numero < -100 || numero > 100)
            {
                alert("El número "+numero+" no es valido.");
            }
            else
            {
                if (numero >= -100 && numero <= 100)
                {
                    numeroValido = true;
                }
                else
                {
                    alert("El dato ingresado no es un número.");
                }
            }
        }
        letraValida = false;
        while (letraValida == false)
        {
            letra = prompt("Ingese una letra.")
            if (letra < "a" || letra > "z")
            {
                alert("La letra "+letra+" no es valida.");
            }
            else
            {
                letraValida = true;
            }
        }
        if (numero % 2 == 0)
        {
            cantidadPares = (cantidadPares + 1);
        }
        if (numero % 2)
        {
            cantidadImpares = (cantidadImpares + 1);
        }
        if (numero == 0)
        {
            cantidadCeros = (cantidadCeros + 1);
        }
        if (numero > 0)
        {
            cantidadPositivos = (cantidadPositivos + 1);
            acumuladorPositivos = (acumuladorPositivos + numero);
            promedioPositivos = (acumuladorPositivos / cantidadPositivos);
        }
        if (numero < 0)
        {
            acumuladorNegativos = (acumuladorNegativos + numero);
        }
        if (bandera == true)
        {
            maximo = (numero);
            minimo = (numero);
            letraMaxima = (letra);
            letraMinima = (letra);
            bandera = false;
        }
        if (numero > maximo)
        {
            maximo = (numero);
            letraMaxima = (letra);
        }
        if (numero < minimo)
        {
            minimo = (numero);
            letraMinima = (letra);
        }
    } while (confirm("¿Desea ingresar otra letra y otro número?"));
    document.write("Cantidad de números pares: "+cantidadPares+
    " Cantidad de números impares: "+cantidadImpares+
    " Cantidad de ceros: "+cantidadCeros+
    " Promedio de números positivos: "+promedioPositivos+
    " Suma de números negativos: "+acumuladorNegativos+
    " Número maximo ingresado: "+maximo+" pertenece a la letra: "+letraMaxima+
    " número minimo ingresado: "+minimo+" pertenece a la letra: "+letraMinima);
}