const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (arrayDeTareas) {
            fs.writeFileSync(this.archivo, JSON.stringify(arrayDeTareas))
    },
    guardarTarea: function (objetoTareas) {
        let archivoTareasJSON = this.leerJSON ();
        archivoTareasJSON.push(objetoTareas);
        this.escribirJSON(archivoTareasJSON);
    },
    leerPorEstado: function (estadoPorFiltrar) {
        let tareasAFiltrar = this.leerJSON ();
        let tareasFiltradas = tareasAFiltrar.filter(function (estadoAFiltrar){
               return estadoAFiltrar.estado == estadoPorFiltrar;
        })
        return tareasFiltradas;
    }
}

module.exports = archivoTareas;