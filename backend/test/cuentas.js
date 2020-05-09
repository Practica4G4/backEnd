/*global describe:false, it:false, beforeEach:false, afterEach:false*/
let expect = require('chai').expect;
const { verCuentas } = require('../src/data/cuentas/verCuentas');
const saldoCuenta = require('../src/data/cuentas/saldoCuenta');
const entradaNoCuenta = require('../src/mapeoObjetos/usuario/entradaNoCuenta')

describe('Validar Cuentas', function () {

    beforeEach(function (done) {
        done();
    });

    it('Validar que las cuentas sean un arreglo ', async function (done) {
        const data = await verCuentas();
        expect(data)
            .to.be.a('array');
        done();
    });
});

describe('Saldo de cuenta', () => {

    // beforeEach(function (done) {
    //     done();
    // });
    
    it('Numero de cuenta valido', (done) => {
        const data = entradaNoCuenta(45564);
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(true);
        done();
    });
    
    it('Numero de cuenta invalido', (done) => {
        const data = entradaNoCuenta('45-564');
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(true);
        done();
    });

    it('Obtener saldo de una cuenta existente', async (done) => {
        const data = await saldoCuenta(45564);
        expect(data)
            .to.be.a('number');
        done();
    });

    it('Obtener saldo de una cuenta no existente', async (done) => {
        const data = await saldoCuenta(4556);
        expect(data)
            .to.be.a('null');
        done();
    });
});