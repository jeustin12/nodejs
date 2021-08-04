const { CrearTabla } = require('./utils/multiplicar');
const argv = require('./utils/yargs');
console.clear();

CrearTabla(argv.b, argv.l, argv.limite)
    .then((nombreArchivo) => console.log(nombreArchivo))
    .catch((err) => console.log(err));
