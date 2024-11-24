const fs = require('fs');

function obtenerBicis() {
    const file = fs.readFileSync('./bicicletas.json', 'utf-8');
    return JSON.parse(file);
}

//console.log(obtenerBicis());

module.exports = obtenerBicis;