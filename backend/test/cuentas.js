/*global describe:false, it:false, beforeEach:false, afterEach:false*/
let expect = require('chai').expect;
const db = require('../src/dataBase/conexion');
const  {verCuentas}  = require('../src/data/cuentas/verCuentas');

describe('Validar Cuentas', function () {

    beforeEach(function (done) {
        done();
    });

    it('Validar que las cuentas sean un arreglo ', async function (done) {
        const data= await verCuentas();
        expect(data)
            .to.be.a('array');
        done();
    });  
});