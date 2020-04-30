let expect = require('chai').expect;
const { listarTransferencia } = require('../src/data/reportes/listarTransferencias');
const { transRealizadas } = require('../src/data/reportes/transferenciasRealizadas');
const { transRecibidas } = require('../src/data/reportes/transferecniasRecibidas');

describe('Reportes', function () {
    let noCuenta;

    beforeEach(function (done) {
        noCuenta = 12345;
        done();
    });

    it('Listar Transferencias generales', async (done) => {
        const data = await listarTransferencia();
        expect(data)
            .to.be.a('array');
        done();
    });

    it('Transferencias recicibidas', async (done) => {
        const data = await transRecibidas(noCuenta);
        expect(data)
            .to.be.a('array');
        done();
    })

    it('Transferencias realizadas', async (done) => {
        const data = await transRealizadas(noCuenta);
        expect(data)
            .to.be.a('array');
        done();
    })
});