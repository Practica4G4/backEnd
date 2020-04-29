const db = require('../../src/dataBase/conexion');
const { verCuentas } = require('../../src/data/cuentas/verCuentas');
module.exports = function (router) {

    router.get('/', async(req, res) => {
       try{
            const cuentas=await verCuentas();          
            if(cuentas != null){
                res.status(200).send(cuentas);
            }else{
                res.status(400).send({ mensaje: 'No hay cuentas registradas' });
            }       
        }catch(error){
            console.log(error);
            res.message = error;
            res.status(500).send({ mensaje: 'No se pudo completar la solicitud' });
        }
    });
};