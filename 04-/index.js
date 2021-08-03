const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
    const busquedas = new Busquedas();
    let opt = 8;

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                
                //buscar el lugar
                const lugares = await busquedas.ciudad(termino);
                //seleccionar el lugar
                const id = await listarLugares(lugares)
                if(id==='0') continue

                
                const LugarSel = lugares.find(l => l.id === id)
                //guardar en bd
                busquedas.agregarHistorial(LugarSel.nombre)
                //clima
                const clima = await busquedas.clima(LugarSel.lat,LugarSel.lng)
                // mostar resultados
                console.log('\ninfo ciudad\n'.green);
                console.log('ciudad',LugarSel.nombre);
                console.log('lat',LugarSel.lat);
                console.log('lng',LugarSel.lng);
                console.log('temperatura',clima.temp);
                console.log('minima',clima.min);
                console.log('Maxima',clima.max);
                console.log('Descripción',clima.desc);

                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar,i)=>{
                    let idx = `${i + 1}.`.red
                    console.log(
                        `${idx} ${lugar}`
                    );
                })
                break;
        }
        await pausa();
    } while (opt !== 0);
};

main();
