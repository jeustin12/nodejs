require('colors');

const mostrarMenu = () => {
    return new Promise((resolve) => {
        console.clear();

        console.log('======================='.green);
        console.log('Seleccione una opcion'.brightGreen);
        console.log('=======================\n'.green);

        console.log(`${'1.'.brightGreen}Crear una Tarea`);
        console.log(`${'2.'.brightGreen}Lista de Tareas`);
        console.log(`${'3.'.brightGreen}Lista de Tareas Completadas`);
        console.log(`${'4.'.brightGreen}Lista de Tarea Pendientes`);
        console.log(`${'5.'.brightGreen}Completar Tarea(s)`);
        console.log(`${'6.'.brightGreen}Borrar Tarea`);
        console.log(`${'0.'.brightGreen}Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question('Selecione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
};

const pausa = () => {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question(
            `\nPresione ${'ENTER'.brightYellow} para continuar\n`,
            (opt) => {
                readline.close();
                resolve(opt);
            }
        );
    });
};
module.exports = {
    mostrarMenu,
    pausa,
};
