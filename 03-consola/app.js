require('colors');
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput,
    borrarTareaMenu,
    confirmar,
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
    let opt = '';

    const tareas = new Tareas();
    const tareasDB = leerDb();

    if (tareasDB) {
        tareas.cargarTareasFromArr(tareasDB);
    }
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear Tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.ListadoCompleto();
                break;
            case '3':
                tareas.ListadoPendientesCompletadas(true);
                break;
            case '4':
                tareas.ListadoPendientesCompletadas(false);
                break;
            case '5':
                break;
            case '6':
                const id = await borrarTareaMenu(tareas.listadoArr);
                const ConfirmarBorrar = await confirmar('¿Esta seguro?');
                if (ConfirmarBorrar) {
                    tareas.borrarTarea(id);
                    console.log();
                    console.log('Tarea Eliminada');
                }
                break;
        }

        guardarDb(tareas.listadoArr);

        await pausa();
    } while (opt !== '0');
};

main();
