const axios = require('axios');

const getClima = async(lat, lng) => {

    const respt = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2d3cc8415f74dfcafe32b9c51f173fb1&units=metric`);

    let respuesta = {
        ciudad: respt.data.name,
        temperatura: respt.data.main.temp
    }

    return respuesta;
}

module.exports = {
    getClima
}