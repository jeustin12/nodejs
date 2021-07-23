const fs = require('fs');

const CrearTabla = async (base = 5) => {
    try {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} X ${i} es igual a ${base * i}\n`;
        }

        fs.writeFileSync(`tablas de multiplicar del ${base}.txt`, salida);

        return `tabla del ${base}.txt creada`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    CrearTabla,
};
