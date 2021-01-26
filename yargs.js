const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'

        }
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'c',
            desc: 'marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}