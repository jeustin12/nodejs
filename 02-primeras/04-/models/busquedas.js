const fs = require('fs')
require('dotenv').config()

const axios = require('axios');
class Busquedas {
    historial = [];
    dbpaht='./db/lugares.json'
    constructor() {
        this.leerDb()
    }

    get paramsMapbox(){
        return{
            'access_token':process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es',
        }
    }

    get historialCapitalizado(){

        return this.historial.map(lugar=>{
           let palabras = lugar.split(' ')
           palabras = palabras.map(p=>p[0].toUpperCase() + p.substring(1))

           return palabras.join(' ')
        })
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

    agregarHistorial(lugar=''){
        // prevenir duplicado
        if(this.historial.includes(lugar.toLocaleLowerCase)){
            return;
        }else{
        //agregar al array
        this.historial= this.historial-splice(0,5)
        this.historial.unshift(lugar.toLocaleLowerCase())}

        //grabar en db
        this.guardarDb();
    }

    guardarDb(){
        const payload={
            historial: this.historial
        }
        fs.writeFileSync(this.dbpaht,JSON.stringify(payload));
    }
    leerDb(){

        if (!fs.existsSync(this.dbpaht)) {
            return;
        }
        const info = fs.readFileSync(this.dbpaht,{encoding:'utf-8'})
        const data = JSON.parse(info)

        this.historial = data.historial
    }
}

module.exports = Busquedas;
