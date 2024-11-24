const obtenerBicicletas = require('./datosBici');

const bicicletas = obtenerBicicletas();

let dhBici = {
    bicicletas,
    
    buscarBici: function (id) {
        let resultado = this.bicicletas.filter(bici => bici.id === id);
        return resultado.length > 0 ? resultado[0] : null;
    },
    venderBici: function (id) {
        let biciEncontrada = this.buscarBici(id)
        if (biciEncontrada) {
            biciEncontrada.vendida = true
            return biciEncontrada;
        }
        return "Bicicleta no encontrada"
    },
    biciParaLaVenta: function () {
        return this.bicicletas.filter(bici => bici.vendida == false)
    },
    totalDeVentas: function () {
        let ventas = this.bicicletas.filter(bici => bici.vendida == true);
        return ventas.reduce((suma, bici) => suma + bici.precio, 0);
    },
    aumentoBici: function (porcentaje) {
        let bicisDisponibles = this.biciParaLaVenta();
        let nuevoArray = bicisDisponibles.map(bici => ({
            ...bici,
            precio: bici.precio + (bici.precio * (porcentaje / 100))
        }));
        
        return nuevoArray;
    },
    biciPorRodado: function (nroRodado) {
        return this.bicicletas.filter(bici => bici.rodado == nroRodado)
    },
    listarTodasLasBici: function () {
        this.bicicletas.forEach(bici => console.log(bici));
    },
    listarTodasLasBici2: function () {
        for (let bici of this.bicicletas) {
            console.log(bici);
        }
    }
}

// console.log("----------LISTADO DE BICICLETAS----------");
// console.log(bicicletas);

// console.log("----------BUSCAR UNA BICI PARTICULAR----------");
// console.log(dhBici.buscarBici(2));

// console.log("----------SI SE ENCONTRÓ LA BICI, MARCAR COMO VENDIDA----------");
// console.log(dhBici.venderBici(2));

// console.log("----------LISTADO DE BICICLETAS PARA LA VENTA----------");
// console.log(dhBici.biciParaLaVenta());

// console.log("----------MONTO TOTAL DE LAS BICIS VENDIDAS----------");
// console.log("$", dhBici.totalDeVentas());

// console.log("----------LISTADO DE BICICLETAS CON AUMENTO DE PRECIO----------");
// console.log(dhBici.aumentoBici(15));

// console.log("----------LISTADO DE BICICLETAS DE UN RODADO EN PARTICULAR----------");
// console.log(dhBici.biciPorRodado(29));

// console.log("----------LISTADO DE BICICLETAS REGISTRADAS----------");
// console.log(dhBici.listarTodasLasBici());

// console.log("----------LISTADO DE BICICLETAS REGISTRADAS 2----------");
// console.log(dhBici.listarTodasLasBici2());