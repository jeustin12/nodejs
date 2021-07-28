const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.brightGreen}Crear una Tarea`,
            },
            {
                value: '2',
                name: `${'2.'.brightGreen}Lista de Tareas`,
            },
            {
                value: '3',
                name: `${'3.'.brightGreen}Lista de Tareas Completadas`,
            },
            {
                value: '4',
                name: `${'4.'.brightGreen}Lista de Tarea Pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.brightGreen}Completar Tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.brightGreen}Borrar Tarea`,
            },
            {
                value: '0',
                name: `${'0.'.brightGreen}Salir`,
            },
        ],
    },
];

const inquirerMenu = async () => {
    console.clear();
    console.log('======================='.green);
    console.log('Seleccione una opcion'.brightGreen);
    console.log('=======================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
};
const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'Enter',
            message: `Presione ${'ENTER'.brightYellow} para continuar`,
        },
    ];

    console.log('\n');
    await inquirer.prompt(question);
};

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favot ingrese un valor';
                }
                return true;
            },
        },
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;
};

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
};
