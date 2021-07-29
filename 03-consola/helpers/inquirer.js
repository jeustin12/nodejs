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

const borrarTareaMenu = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.brightYellow;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
        };
    });
    choices.unshift({
        value: '0',
        name: `${'0.'.brightGreen}Cancelar`,
    });
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices,
        },
    ];

    const { id } = await inquirer.prompt(preguntas);

    return id;
};
const CompletarTareasMenu = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.brightYellow;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false,
        };
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleciones',
            choices,
        },
    ];

    const { ids } = await inquirer.prompt(pregunta);

    return ids;
};
const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        },
    ];

    const { ok } = await inquirer.prompt(question);

    return ok;
};

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    borrarTareaMenu,
    confirmar,
    CompletarTareasMenu,
};
