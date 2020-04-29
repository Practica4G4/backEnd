const { tipoCambioDia, tipoCambioDiaFechaInicial } = require('../../src/data/bancoGuatemalaAPI');

module.exports = function (router) {

    router.get('/Dia', async (req, res) => {
        const data = await tipoCambioDia();
        if (!data) return res.status(500).send({ mensaje: 'Servicio no disponible'});
        return res.send(data);
    });

    router.get('/fechaInicial', async (req, res) => {
        const data = await tipoCambioDiaFechaInicial(req.query.fecha);
        if (!data) return res.status(500).send({ mensaje: 'Servicio no disponible'});
        return res.send(data);
    });
}