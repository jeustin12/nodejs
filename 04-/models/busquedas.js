const axios = require('axios');

class Busquedas {
    historial = ['bogota', 'liberia'];

    constructor() {
        //leer db si existe
    }

    async ciudad(lugar = '') {
        //peticion axios
        // console.log('ciudad', lugar);
        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            return []; //retornar los lugares que coincidan
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;
