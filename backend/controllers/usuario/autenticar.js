const db = require('../../src/dataBase/conexion');
const { autenticar } = require('../../src/data/usuario/autenticar');
module.exports = function (router) {

    router.post('/', async (req, res) => {
        try {
            const autenticado = await autenticar(req);
            if (autenticado != null) {
                res.status(200).send({
                    mensaje: 'Bienvenido',
                    usuario: autenticado
                });
            } else {
                res.status(400).send({ mensaje: 'Credenciales no validas' });
            }

        } catch (error) {
            console.log(error);
            res.message = error;
            res.status(500).send({ mensaje: 'No se pudo completar la solicitud' });
        }
    });
};