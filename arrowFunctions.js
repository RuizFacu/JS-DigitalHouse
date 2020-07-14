 //ARROW FUNCTIONS
 //SOLO UNA SENTENCIA
 let sumar = (num1, num2) => num1 + num2;
 let resultadoSuma = sumar(8, 10);
 console.log(resultadoSuma);

 let laMitad = (num1) => num1/2;
 console.log(laMitad(8));

 let dividir = (num1, num2) => num1/num2;
console.log(dividir(70, 10));
// MAS COMPLEJAS. FUNCTION TENGO QUE TRABAJAR

let tengoQueTrabajar = dia => {
    if (dia == 'sabado' || dia == 'domingo') {
        return 'No tengo que trabajar';
    } else {
        return 'Tengo que trabajar';
    }
    }

console.log(tengoQueTrabajar ('domingo'));
console.log(tengoQueTrabajar('lunes'));

////////////////////////////////////////////////////////
let dameCincoo =() => return [1,2,3,4,5];
let multiplicarPorDos = numero =>  numero*2;
let mostrarNombre =()=> 'Mi nombre es Hernán';

console.log(dameCincoo);