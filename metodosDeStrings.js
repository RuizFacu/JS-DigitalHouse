// METODOS DE STRING
// Un string es un objeto
// Los metodos son funciones que pertenecen a
// determinados objetos, y el string es un objeto.
/* Por ejemplo:

1. .length Devuelve la longitud de una cadena de texto
2. .indexOf() Recibe un parametro una cadena de texto
nos devuelve la posicion en el string de lo buscado,
si no se encuentra alli, devuelve -1
3. slice Toma una porcion determinada de una
cadena de texto, ademas necesitar pasar por parametro
dos numeros. 


*/

let mensaje = 'Gran dia para practicar Javascript';
console.log(mensaje);
//Cantidad de caracteres - length
console.log(mensaje.length);
//Donde se encuentra la palabra dia - .indexOf()
console.log(mensaje.indexOf('dia'));
console.log(mensaje.indexOf('Jorge'));
//Quiero hacer un recorte - slice
console.log(mensaje.slice(0, 24));
console.log(mensaje);
// El SLICE no modifica el mensaje original

//METODO .trim()
//Elimina los espacios en blanco antes y despues
// de una cadena de caracteres
mensaje.trim();
console.log(mensaje.trim());

//METODO .split() Recibe un string y lo convierte en un array.
//RECIBE COMO PARAMETRO LO QUE QUIERO UTILIZAR COMO SEPARADOR
// POR EJEMPLO UN ESPACIO, separara por palabras
// NO SE PUEDE EJECUTAR SPLIT SOBRE UNA VARIABLE UNDEFINED 
'Soy del planeta tierra'.split('');
//Soy en el indice 0, del indice 1, planeta indice 2

console.log(mensaje.split(' '));

//Metodo REPLACE, reemplaza una porcion de texto en un string.
console.log(mensaje.replace('Javascript', 'todo'));

let saludo = '¡Hola!, soy Carli';
let licenciada = saludo.slice(12, 17);
console.log(licenciada);