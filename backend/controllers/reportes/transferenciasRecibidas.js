const { transRecibidas } = require('../../src/data/reportes/transferecniasRecibidas');
module.exports = function (router) {

    router.get('/:noCuenta', async (req, res) => {
        try {
            const transferencias = await transRecibidas(req.params.noCuenta);
            if (transferencias != null) {
                res.status(200).send({
                    transferencias
                });
            } else {
                res.status(400).send({ mensaje: 'No existen transferencia en estos momentos.' });
            }

        } catch (error) {
            console.log(error);
            res.message = error;
            res.status(500).send({ mensaje: 'No se pudo completar la solicitud' });
        }
    });
};