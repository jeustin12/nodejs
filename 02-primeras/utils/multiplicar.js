const fs = require('fs');
const colors = require('colors');

const CrearTabla = async (base = 5, listar, limite) => {
    try {
        let salida = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base} X ${i} es igual a ${base * i}\n`;
        }

        if (listar === true) console.log(colors.rainbow(salida));

        fs.writeFileSync(
            `./tablas/tablas de multiplicar del ${base}.txt`,
            salida
        );

        return colors.rainbow(`tabla del ${base}.txt creada`);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    CrearTabla,
};
