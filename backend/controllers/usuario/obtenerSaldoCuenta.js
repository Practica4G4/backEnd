const saldoCuenta = require('../../src/data/cuentas/saldoCuenta');
const entradaNoCuenta = require('../../src/mapeoObjetos/usuario/entradaNoCuenta');

module.exports = function (router) {
    router.get('/:noCuenta', async (req, res) => {
        if (!entradaNoCuenta(req.params.noCuenta)) return res.status(400).send({ mensaje: 'Cuenta no valida.' });
        const data = await saldoCuenta(req.params.noCuenta);
        if (!data) return res.status(500).send({ mensaje: 'Servicio no disponible.' });
        return res.send({ saldoCuenta: data });
    });
}