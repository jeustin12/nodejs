require('dotenv').config()
const axios = require('axios');
class Busquedas {
    historial = ['bogota', 'liberia'];

    constructor() {
        //leer db si existe
    }

    get paramsMapbox(){
        return{
            'access_token':process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es',
        }
    }

    async ciudad(lugar = '') {
        //peticion axios
        // console.log('ciudad', lugar);
        try {
            const instace = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/'${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp =  await instace.get();
            console.log(resp.data);
            return []; //retornar los lugares que coincidan
        } catch (error) {
            throw new Error(error)
            // return [];
        }
    }
}

module.exports = Busquedas;
