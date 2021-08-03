const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
    const busquedas = new Busquedas();
    let opt = 8;

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);
                //buscar el lugar

                //seleccionar el lugar

                //clima

                // mostar resultados

                console.log('\ninfo ciudad\n'.green);
                console.log('ciudad');
                console.log('lat');
                console.log('lng');
                console.log('temperatura');
                console.log('minima');
                console.log('Maxima');

                break;
            case 2:
                console.log('opt 2');
                break;
        }
        await pausa();
    } while (opt !== 0);
};

main();
