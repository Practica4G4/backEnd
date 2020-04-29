/*global describe:false, it:false, beforeEach:false, afterEach:false*/
let expect = require('chai').expect;
const db = require('../src/dataBase/conexion');
const  {saldoOrigen}  = require('../src/data/transferencias/saldoOrigen');
const  {cuentaDestino}  = require('../src/data/transferencias/cuentaDestino');


describe('Validar Transferencia', function () {

    let entradaTransferencia, correctData,incorrectData;

    beforeEach(function (done) {
        entradaTransferencia = require('../src/mapeoObjetos/transferencia/entradaTransferencia');       
        correctData = {
            "monto":"100.5",
            "cuentaOrigen":"102938",
            "cuentaDestino":"12345"
        };
        incorrectData = {
            "monto":"50000",
            "cuentaOrigen":"102938",
            "cuentaDestino":"12311145"
        };
        done();
    });

    it('Validar cuenta de destino existente', async function (done) {
        const data= await cuentaDestino(correctData);
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(true);
        done();
    });

    it('Validar cuenta de destino inexistente', async function (done) {
        const data= await cuentaDestino(incorrectData);
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(false);
        done();
    });

    it('Validar monto suficiente', async function (done) {
        const data= await saldoOrigen(correctData);
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(true);
        done();
    });

    it('Validar monto insuficiente', async function (done) {
        const data= await saldoOrigen(incorrectData);
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(false);
        done();
    });
    
});