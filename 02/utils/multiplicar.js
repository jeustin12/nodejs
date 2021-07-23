const fs = require('fs');

const CrearTabla = (base = 5) => {
    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} X ${i} es igual a ${base * i}\n`;
    }
    fs.writeFileSync(`tablas de multiplicar del ${base}.txt`, salida);

    console.log(`tabla del ${base}.txt creada`);
};

module.exports = { CrearTabla };
