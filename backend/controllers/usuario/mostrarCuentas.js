const db = require('../../src/dataBase/conexion');
module.exports = function (router) {

    router.get('/', async(req, res) => {
       try{
            const result = await db.query('SELECT CONCAT(nombre," ",apellido) as Nombre,noCuenta FROM USUARIO');
           
            if(result.length > 0){
                res.status(200).send({ result });
            }else{
                res.status(400).send({ mensaje: 'No hay cuentas registradas' });
            }
        
        }catch(error){
            res.message = error;
            res.status(500).send({ mensaje: 'No se pudo completar la solicitud' });
        }
    });
};