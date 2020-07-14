let texto = '28.99';
console.log(texto);

//EJEMPLO typeOf(
console.log(typeof texto);

//EJEMPLO parseInt
let numero = parseInt(texto);
console.log(typeof numero);
console.log(numero);

//EJEMPLO Number
let otroNumero= Number (texto);
console.log(typeof otroNumero);
console.log(otroNumero);

// EJEMPLO String a Numero
//Ahora busco que numero pase a ser un string
//El metodo es String(variableAConvertir);

let numeroConvertido = String(numero);
console.log(numeroConvertido);
console.log(typeof numeroConvertido);
console.log(numeroConvertido + 50);
//Concatena texto y numero, no suma, ya que son 
//tipos de datos distintos