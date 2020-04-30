let expect = require('chai').expect;
const { registrar } = require('../src/data/usuario/registrar');
const { roolback } = require('../src/data/usuario/registrar');

describe('Validar Registro de usuario', function () {
    let userCorrect, userIncorrect;

    beforeEach(function (done) {
        userCorrect = {
            "dpi": "9876543210",
            "nombre": "userCorrect",
            "apellido": "Success",
            "noCuenta": "987654321",
            "saldoInicial":"1000",
            "correoElectronico": "usercorrect@gmail.com",
            "contrasena": "usercorrect"
        }
        done();
    });

    it('Registro de usuario con exito.', async (done) => {
        const data = await registrar(userCorrect);
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(true);
        //await roolback(userCorrect.dpi);
        done();
    });

    it('Registro de usuario incorrecto, noCuenta ya existe', async (done) => {
        const data = await registrar(userCorrect);
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(false);
        done();
    });

    it('Registro de usuario incorrecto.', async (done) => {
        const data = await roolback(userCorrect.dpi);
        expect(data)
            .to.be.a('boolean')
            .to.be.equal(true);
        done();
    });


});
