const fs = require('fs');
const guardardb = () => {
    let data = JSON.stringify(listadoporhacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    })

}

const cargardb = () => {
    try {
        listadoporhacer = require('../db/data.json');
    } catch (error) {
        listadoporhacer = [];
    }

}

let listadoporhacer = [];

const crear = (descripcion) => {
    cargardb();
    let porhacer = {
        descripcion,
        completado: false,

    };
    listadoporhacer.push(porhacer);
    guardardb();
    return porhacer;
}

const getlistado = () => {
    cargardb();
    return listadoporhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargardb();
    let index = listadoporhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;

        if (index >= 0) {
            listadoporhacer[index].completado = completado;
            guardardb();
            return true;

        } else {
            return false;
        }
    })

}

module.exports = {
    crear,
    getlistado,
    actualizar
}