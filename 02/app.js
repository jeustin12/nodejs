const { CrearTabla } = require('./utils/multiplicar');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true;
    }).argv;
console.clear();

CrearTabla(argv.b, argv.l)
    .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
    .catch((err) => console.log(err));
