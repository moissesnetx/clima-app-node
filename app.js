const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(ipDns) => {

    try {
        let resp1 = await lugar.getLugarLatLng(ipDns);
        let resp2 = await clima.getClima(resp1.lat, resp1.lng);
        return `Red = ${resp1.network} \nIp o DNS Ubicado \nCountry ${resp1.countryName} \nCity = ${resp2.ciudad} Temp = ${resp2.temperatura} \nLat = ${resp1.lat} y Lng = ${resp1.lng}`;
    } catch {
        return `No se pudo determinar la informacion de la Ip o Dns ${ipDns}`;
    }
}

getInfo(argv.ipDns)
    .then(console.log)
    .catch(console.log);