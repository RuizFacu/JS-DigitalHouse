function Juego (nombre, consola, horasDeJuego) {
    this.nombre = nombre;
    this.consola= consola;
    this.horasDeJuego= horasDeJuego;
}

let juego1 = new Juego("The Evil Within", "PS4, XBOX ONE y PC", 20); 

console.log ("Detalles del juego" + juego1);