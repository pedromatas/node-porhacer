//const argv = require('yargs').argv;
const argv = require('./yargs').argv;
const porhacer = require('./porhacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porhacer.getlistado();
        for (let tarea of listado) {
            console.log('========por hacer=========='.red);
            console.log(tarea.descripcion);
            console.log('estado:', tarea.completado);
            console.log('========================'.green);
        }
        break;

    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    default:
        console.log('comando no reconocido');

}