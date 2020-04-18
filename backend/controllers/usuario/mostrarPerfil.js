const db = require('../../src/dataBase/conexion');
module.exports = function (router) {

    router.post('/:noCuenta', async(req, res) => {
       try{
           const entradaPerfil = require('../../src/mapeoObjetos/usuario/entradaPerfil');

            
            const data = entradaPerfil(req.params).data;
            const result = await db.query('SELECT * FROM USUARIO WHERE noCuenta = ?',[data.noCuenta]);
           
            if(result.length > 0){
                res.status(200).send({ result });
            }else{
                res.status(400).send({ mensaje: 'Numero de cuenta no valido.' });
            }
        
        }catch(error){
            res.message = error;
            res.status(500).send({ mensaje: 'No se pudo completar la solicitud' });
        }
    });
};