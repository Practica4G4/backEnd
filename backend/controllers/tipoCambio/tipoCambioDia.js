const { tipoCambioDia } = require('../../src/data/bancoGuatemalaAPI');

module.exports = function (router) {

    router.get('/', async (req, res) => {
        const data = await tipoCambioDia();
        if (null) return res.status(500).send(null);
        return res.send(data);
    });
}