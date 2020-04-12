const db = require('../../src/dataBase/conexion');
module.exports = function (router) {

    router.get('/', async(req, res) => {
        const  entradaRegistro = require('../../src/mapeoObjetos/usuario/entradaRegistro');
        
        //insercion a la base de datos
        const result = await db.query('INSERT INTO USUARIO set ?',[entradaRegistro(req.body).data]);

        console.log(result);
        res.status(result.serverStatus).send({ mensaje: result.message });       
    });
};