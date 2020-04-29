/*global describe:false, it:false, beforeEach:false, afterEach:false*/
let expect = require('chai').expect;

describe('TipoDeCambio Servicio', function () {

    const bancoGuatemala = require('../src/external/webservice/bancoGuatemala');

    // beforeEach(function (done) {
    //     done()
    // });

    // afterEach(function (done) {
    //     mock.close(done);
    // });

    it('Respuesta banco guatemala debe cumplir con los parametros necesarios', function (done) {
        return bancoGuatemala
            .tipoCambioDia()
            .then(data => {
                expect(data)
                    .to.be.a('string')
                    .that.includes('TipoCambioDiaResult', 'Tag XML TipoCambioDiaResult')
                    .that.includes('CambioDolar', 'Tag XML CambioDolar')
                    .that.includes('VarDolar', 'Tag XML VarDolar');
                done();
            })
    });

});


describe('TipoDeCambio Formato', function () {

    const entradaTipoCambioDia = require('../src/mapeoObjetos/bancoGuatemala/entradaTipoCambioDia');
    const salidaTipoCambioDia = require('../src/mapeoObjetos/bancoGuatemala/salidaTipoCambio');
    const xmlData = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http:\/\/schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><TipoCambioDiaResponse xmlns="http://www.banguat.gob.gt/variables/ws/"><TipoCambioDiaResult><CambioDolar><VarDolar><fecha>27/04/2020</fecha><referencia>7.70435</referencia></VarDolar></CambioDolar><TotalItems>1</TotalItems></TipoCambioDiaResult></TipoCambioDiaResponse></soap:Body></soap:Envelope>';
    const jsonData = {
        "soap:Envelope": {
            "soap:Body": {
                "TipoCambioDiaResponse": {
                    "TipoCambioDiaResult": {
                        "CambioDolar": {
                            "VarDolar": {
                                "fecha": "27/04/2020",
                                "referencia": 7.70435
                            }
                        },
                        "TotalItems": 1
                    }
                }
            }
        }
    };

    // beforeEach(function (done) {
    //     done();
    // });

    // afterEach(function (done) {
    //     mock.close(done);
    // });

    it('Convertir xml a JSON', function (done) {
        const data = entradaTipoCambioDia.formatoEntradaTipoCambioDia(xmlData);
        expect(data)
            .to.be.a('object');
        done();
    });

    it('Convertir xml a JSON cadena vacia/invalida', function (done) {
        const data = entradaTipoCambioDia.formatoEntradaTipoCambioDia('');
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(false);
        done();
    });

    it('Convertir JSON a formato de salida', function (done) {
        const data = salidaTipoCambioDia(jsonData);
        expect(data)
            .to.be.a('object')
            .to.be.eql({ fecha: '27/04/2020', tipoCambio: 7.70435 });
        done();
    });
});