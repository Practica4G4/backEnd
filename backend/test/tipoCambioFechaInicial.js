/*global describe:false, it:false, beforeEach:false, afterEach:false*/
let expect = require('chai').expect;

describe('FechaInicial Formato', function () {

    const formatoFechaTipoInicial = require('../src/mapeoObjetos/bancoGuatemala/formatoFechaTipoInicial');

    // beforeEach(function (done) {
    //     done();
    // });

    // afterEach(function (done) {
    //     mock.close(done);
    // });

    it('Fecha formato valido', function (done) {
        const data = formatoFechaTipoInicial('15/01/2020');
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(true);
        done();
    });

    it('Fecha formato no valido', function (done) {
        const data = formatoFechaTipoInicial('01/15/2020');
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(false);
        done();
    });

    it('Fecha inexistente', function (done) {
        const data = formatoFechaTipoInicial('32/01/2020');
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(false);
        done();
    });

    it('Fecha ano bisiesto', function (done) {
        const data = formatoFechaTipoInicial('29/02/2020');
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(true);
        done();
    });
});

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
            .tipoCambioDiaFechaInicial('27/04/2020')
            .then(data => {
                expect(data)
                    .to.be.a('string')
                    .that.includes('TipoCambioFechaInicialResponse', 'Tag XML TipoCambioFechaInicialResult')
                    .that.includes('TipoCambioFechaInicialResult', 'Tag XML TipoCambioFechaInicialResult')
                    .that.includes('Vars', 'Tag XML Vars');
                done();
            })
    });
});

describe('TipoDeCambio Formato', function () {

    const entradaTipoCambioDia = require('../src/mapeoObjetos/bancoGuatemala/entradaTipoCambioDia');
    const salidaTipoCambioFechaInicialoCambio = require('../src/mapeoObjetos/bancoGuatemala/salidaTipoCambioFechaInicial');
    const xmlData = '<?xml version="1.0" encoding="utf-8"?> <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"> <soap:Body> <TipoCambioFechaInicialResponse xmlns="http://www.banguat.gob.gt/variables/ws/"> <TipoCambioFechaInicialResult> <Vars> <Var> <moneda>2</moneda> <fecha>28/04/2020</fecha> <venta>7.70677</venta> <compra>7.70677</compra> </Var> <Var> <moneda>2</moneda> <fecha>29/04/2020</fecha> <venta>7.71402</venta> <compra>7.71402</compra> </Var> </Vars> <TotalItems>2</TotalItems> </TipoCambioFechaInicialResult> </TipoCambioFechaInicialResponse> </soap:Body> </soap:Envelope>';
    const jsonData = { "soap:Envelope": { "soap:Body": { "TipoCambioFechaInicialResponse": { "TipoCambioFechaInicialResult": { "Vars": { "Var": [{ "moneda": 2, "fecha": "28/04/2020", "venta": 7.70677, "compra": 7.70677 }, { "moneda": 2, "fecha": "29/04/2020", "venta": 7.71402, "compra": 7.71402 }] }, "TotalItems": 2 } } } } };

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
        const data = salidaTipoCambioFechaInicialoCambio(jsonData);
        expect(data)
            .to.be.a('array')
            .to.be.eql([{
                moneda: 2,
                fecha: '28/04/2020',
                venta: 7.70677,
                compra: 7.70677
            },
            {
                moneda: 2,
                fecha: '29/04/2020',
                venta: 7.71402,
                compra: 7.71402
            }]);
        done();
    });
});