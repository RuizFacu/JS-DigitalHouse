/// Sirven para utilizar de parametro en una funcion
// otra funcion, donde esta otra funcion seria una 
// funcion callback 

// CALCULADORA

let sumar = (n1, n2) => n1+n2;
let restar = (n1, n2) => n1-n2;
let dividir = (n1, n2) => n1/n2;
let multiplicar = (n1, n2) => n1 * n2;

let calculadora = (n1, n2, operacion) => operacion(n1, n2);

console.log('El resultado de la suma es ' + calculadora(10, 5, sumar));
console.log('El resultado de la resta es ' + calculadora(10, 5, restar));
console.log('El resultado de la division es ' + calculadora(10, 5, dividir));
console.log('El resultado de la multiplicacion es ' + calculadora(10, 5, multiplicar));

//// EJERCICIO DOBLE, TRIPLE, APPLY
let doble = n1 => n1 * 2;
let triple = n1 => n1 * 3;
let apply = (n1, funcionDeseada) => funcionDeseada(n1);

console.log(apply(10, doble));
console.log(apply(10, triple));

////// EJERCICIO agregarHttp y PROCESAR
function agregarHttp(url) {
    return'http://'+url;
}

function procesar(listaDeSitios, funcionHttp)  {
    let direccionesCompletas = [];
    for (let i = 0; i<= listaDeSitios.length; i++) {
        direccionesCompletas.push(funcionHttp(listaDeSitios[i]));
    }
    return direccionesCompletas;
}

