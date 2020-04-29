const request = require('request');
const options = {
    'method': 'POST',
    'url': 'http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx',
    'headers': {
        'Content-Type': 'text/xml'
    }
};

module.exports.tipoCambioDia = () => {
    options.body = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ws=\"http://www.banguat.gob.gt/variables/ws/\">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <ws:TipoCambioDia/>\n   </soapenv:Body>\n</soapenv:Envelope>";
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) return reject(new Error(error));
            return resolve(response.body);
        });
    });
}

module.exports.tipoCambioDiaFechaInicial = (fechaInicial) => {
    options.body = `<soap:Envelope xmlns:xsi="http:\/\/www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body> <TipoCambioFechaInicial xmlns="http://www.banguat.gob.gt/variables/ws/"> <fechainit>${fechaInicial}</fechainit> </TipoCambioFechaInicial> </soap:Body> </soap:Envelope>`;
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) return reject(new Error(error));
            return resolve(response.body);
        });
    });
}