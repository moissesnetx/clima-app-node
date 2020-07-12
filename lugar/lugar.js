const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir); // esta linea sirver para los caracteres especiales en el url

    const instance = axios.create({
        baseURL: `https://geo-location1.p.rapidapi.com/address/${encodedUlr}`,
        headers: { 'x-rapidapi-key': 'd242f62535msh18da0a06b032beep1d8c88jsncb50496a2aea' }
    });


    const resp = await instance.get();

    if (!resp.data.hasOwnProperty('Network')) {
        throw new Error('No se localizo Ip o Dns');
    }


    const data = resp.data;
    const lat = data.Network.latitude;
    const lng = data.Network.longitude;
    const network = data.Network.network;
    const countryName = data.Address.country_name
    const countryIsoCode = data.Address.country_iso_code

    return {
        countryName,
        countryIsoCode,
        network,
        lng,
        lat
    }

}


module.exports = {
    getLugarLatLng
}