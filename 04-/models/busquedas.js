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
            return resp.data.features.map(lugar=>({
                id: lugar.id,
                nombre:lugar.place_name,
                lng:lugar.center[0],
                lat:lugar.center[1],
            }))
        } catch (error) {
            return [];
        }
    }

    async clima(lat,lng){
        try {
            const instance = axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather`,
                params:{
                    lat:lat,
                    lon:lng,
                    appid:process.env.OPEN_WEATHER_KEY,
                    units:'metric',
                    lang:'es'
                }
            })
            const resp = await instance.get()
            const {weather,main} = resp.data
            return {
                desc:weather[0].description,
                temp:main.temp,
                min:main.temp_min,
                max:main.temp_max
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = Busquedas;
