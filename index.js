function showNumber (number){
    console.log("El número ingresado es" + "" + number);
}


console.log("Holi mundo");

console.log("tercer commit");

// suma 

function sumar(numero1,numero2){
    const resultado = numero1 + numero2;
    console.log(resultado);
    return resultado;
    // console.log("El resultado de la suma es: " + (a+b) );
}

// fin de suma

//Calcular promedio

function calcularPromedio(numero1, numero2){
    const total = sumar(numero1, numero2);
    console.log(total/2);
}


// resta
let resta = function(a,b){
    console.log("El resultado de la resta es: " + (a-b) );
}

// fin de resta

// multiplicación
let multiplicacion = function(a,b){
    console.log("El resultado de la multiplicacion es: " + (a*b) );
}
// fin de multiplicación

// división
let multiplicacion = function(a,b){
    console.log("El resultado de la multiplicacion es: " + (a/b) );
}
// fin de división
