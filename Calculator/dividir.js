function dividir (numeroA, numeroB) {
    if (numeroB === 0 || 
numeroA === 0) {
        return "No se puede dividir por 0"
    } else {
        return numeroA/numeroB
    }
}
module.exports = dividir;