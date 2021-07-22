const fs = require('fs');

console.clear();
const base = 8;
console.log('===========');
console.log(`tabla del ${base}`);
console.log('===========');
let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `${base} X ${i} es igual a ${base * i}\n`;
}
console.log(salida);
fs.writeFile('tablas de multiplicar.txt', salida, (err) => {
    if (err) throw err;
    console.log('tabla del ' + base + ' ' + 'creada');
});
