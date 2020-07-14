// VARIABLES
/* La diferencia entre VAR y LET es el alcance de la variables.
VAR es una variable declarada PÚBLICA. 
LET es una variable declarada LOCAL. 


let nombreCompleto = "Daniel";
console.log(nombreCompleto);

if (nombreCompleto == "Daniel") {
    let nombreCompleto = "Uriel";
    console.log(nombreCompleto);
}


// TIPOS DE DATOS 
*/

// FUNCIONES
//              CREAR CALCULADORA


/* DE AHORA EN MAS A LAS FUNCIONES
LAS LLAMAREMOS MODULOS
ESTA ES UNA FUNCION DE LA CUAL PODEMOS EXPORTAR
PARA QUE LUEGO PUEDA SER UTILIZADA POR OTRO PROGRAMA
Se lo guarda aparte para tener una organizacion
y poder acceder a este por ejemplo haciendo un codigo
de mil lineas. 
De esta manera podemos administrar funciones por 
separado, y ademas podemos invocarlas por mas de
que esten en otro modulo.

PARA PODER INVOCAR LA FUNCION EN ESTE
ARCHIVO DEBO HACER LO SIGUIENTE:
*/

const sumar = require ('./sumar');
const restar = require ('./restar');
const multiplicar = require ('./multiplicar');
const dividir = require ('./dividir');

console.log(sumar (0, 8));
console.log (restar (0, 8));
console.log(multiplicar (0, 8));
console.log(multiplicar (2, 8));
console.log(dividir (0, 8));
console.log(dividir(8, 2));


