//https://developers.google.com/maps/documentation/geocoding/start
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv;

let ObtenerInfo = async(cDireccion) => {
    let cMensaje = '';
    try {
        let coordenadas = await lugar.ObtenerUbicacion(cDireccion);
        let dTemperatura = await clima.ObtenerTemperatura(coordenadas.lat, coordenadas.lng);
        cMensaje = `El clima en ${coordenadas.direccion} es de ${dTemperatura} °C`;

    } catch (e) {
        cMensaje = `No se pudo determinar el clima en ${cDireccion}`;
    }

    return cMensaje;
}

ObtenerInfo(argv.direccion)
    .then(cMensaje => console.log(cMensaje))
    .catch(e => console.log(e));