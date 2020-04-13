const db = require('../../src/dataBase/conexion');
module.exports = function (router) {

    router.post('/', async(req, res) => {
       try{
           const entradaLogin = require('../../src/mapeoObjetos/usuario/entradaLogin');
        
        }catch(error){
            if(error.code == 'ER_DUP_ENTRY'){
                res.message = error;
                res.status(400).send({ mensaje: 'XCredenciales Incorrectas.' }); 
            }else{
                res.message = error;
                res.status(500).send({ mensaje: 'No se pudo completar la solicitud' });
            }
        }
    });
};