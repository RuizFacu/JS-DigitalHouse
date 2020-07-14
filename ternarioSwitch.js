//////////////////////// iF TERNARIO
let fruta = "Manzana"

let resultado = fruta == "Manzana" ? "Buenisimo, me gustan las manzanas" : "Ufa, queria manzana"

console.log(resultado) ;

let fruta2 = "Pera";
let resultado2 = fruta2 == fruta ? "Buenisimo, me gustan las manzanas" : "Ufa, queria manzana"
console.log(resultado2);

///////////////////////// switch

let semaforo = "amarillo";

switch (semaforo) {
  case "verde": //el color que se ingresa
    console.log("Puedo cruzar"); //lo que quiero que suceda si se cumple la condicion del caso
    break; //para cortar el caso, corta la ejecucion del caso
  case "amarillo":
    console.log("Precaucion");
    break;
  case "rojo":
    console.log("No cruzar");
    break;
  default: //lo que quiero que se suceda si no se da ningun caso
    console.log("El semaforo esta roto");
    break;
}

//////////////////////////////////////////////////////////// EJERCICIO TENGO CLASES - SWITCH

function tengoClases(dia) {
	switch (dia) {
		case "lunes":
		case "miércoles":
		case "viernes":
			console.log("tenés clases");
			break;
		default:
			console.log("no tenés clases");
			break;
	}
}

console.log(tengoClases("lunes"));