const axios = require('axios');

let ObtenerUbicacion = async(cDireccion) => {
    let cLugar = encodeURI(cDireccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cLugar}&key=AIzaSyBgn-kRTlDKW8jm6X9j8ZhJQJP5NJjsTxE`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontró una ubicacion para la ciudad: ${cDireccion}`);
    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    ObtenerUbicacion
}