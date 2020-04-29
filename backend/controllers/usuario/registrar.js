const db = require('../../src/dataBase/conexion');
const  { registrar } = require('../../src/data/usuario/registrar');
        
module.exports = function (router) {
    router.post('/', async(req, res) => {
       try{
           const result = await registrar(req);           
            if(result){
                res.status(200).send({ mensaje: "Usuario Registrado" });     
            }else{
                res.status(400).send({ mensaje: "No se pudo registrar al usuario." });   
            } 
        }catch(error){
            res.status(500).send({ mensaje: "No se pudo completar la solicitud." });   
        }
    });
};