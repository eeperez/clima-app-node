const axios = require('axios');

const ObtenerTemperatura = async(dLatitud, dLongitud) => {

    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${dLatitud}&lon=${dLongitud}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);

    return clima.data.main.temp;
}

module.exports = {
    ObtenerTemperatura
}