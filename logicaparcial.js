//declaracion de variables
var x,tipoOperacion,mensaje;

tipoOperacion=parseInt(prompt("escriba 1. numero entre 1 a 9, 2. numero entre 10 y 99, 3 numero entre 100 y 999"));

switch (tipoOperacion) {
    //operacion para numeros de 1 digito
    case 1:
        //solicitud de dato numerico
        x=parseInt(prompt("escriba un numero entre 1 y 9"));
        if (x >=1 && x<=9){
            x=x*x
            mensaje="el numero se elevo al cuadrado"
        }else{
            //espacio por si el numero no cumple con las 
            //condiciones dadas para el programa
            x= "Número no válido"
            tipoOperacion=" "
        }
        alert("el resultado es "+x+", "+mensaje);
        break;
    //operacion para numeros de 2 digitos
    case 2:
        //solicitud de dato numerico
        x=parseInt(prompt("escriba un numero entre 10 y 99"));
        if (x>=10 && x<=99){
            x=x*2
            mensaje="el numero se multiplico por 2"
        }else{
            //espacio por si el numero no cumple con las 
            //condiciones dadas para el programa
            x= "Número no válido"
            tipoOperacion=" "
        }
        alert("el resultado es "+x+", "+mensaje);
        break;
    //operacion para numeros de 3 digitos
    case 3:
        //solicitud de dato numerico
        x=parseInt(prompt("escriba un numero entre 100 y 999"));
        if(x>=100 && x<=999){
            x=x-100
            mensaje="al numero se le resto 100"
        }else{
            //espacio por si el numero no cumple con las 
            //condiciones dadas para el programa
            x= "Número no válido"
            tipoOperacion=" "
        }
        alert("el resultado es "+x+", "+mensaje);
        break;

    default:
        alert("Número no válido");
        break;
}

//brayan estein acosta cc 1107509939