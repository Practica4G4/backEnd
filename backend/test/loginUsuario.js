let expect = require('chai').expect;
const db = require('../src/dataBase/conexion');
const { autenticar } = require('../src/data/usuario/autenticar');

describe('Validar Autenticacion de usuario', function () {
    let entradaAutenticar, correctData, incorrectData;

    beforeEach(function (done) {
        correctData = {
            "noCuenta": "102938",
            "contrasena": "123456"
        };
        incorrectData = {
            "noCuenta": "123456987",
            "contrasena": "123test"
        };
        done();
    });

    it('Validar Usuario Existente', async (done) => {
        const data = await autenticar(correctData);
        expect(data)
            .to.be.a('array');
        done();
    });

    it('Usuario incorrecto', async (done) => {
        const data = await autenticar(incorrectData);
        expect(data)
            .to.be.a('null');
        done();
    })
});