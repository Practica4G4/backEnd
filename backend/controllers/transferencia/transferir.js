const db = require('../../src/dataBase/conexion');
const  {saldoOrigen}  = require('../../src/data/transferencias/saldoOrigen');
const  {cuentaDestino}  = require('../../src/data/transferencias/cuentaDestino');
const  {transferir} = require('../../src/data/transferencias/transferir');
module.exports = function (router) {

    router.post('/', async(req, res) => {
       try{           
            const existeCuentaDestino=await cuentaDestino(req.body);
            if(existeCuentaDestino){
                const saldoSuficiente = await saldoOrigen(req.body);
                if(saldoSuficiente){
                    const realizarTransferencia = await transferir(req.body);
                    if(realizarTransferencia){
                        res.status(200).send({ mensaje: "Transferencia realizada" });
                    }else{
                        res.status(400).send({ mensaje: "Transferencia no realizada." });
                    }                   
                }else{
                    res.status(400).send({ mensaje: "Transferencia no realizada, fondos no suficientes." });
                }
            }else{
                res.status(400).send({ mensaje: "Transferencia no realizada, no existe la cuenta destino." });
            }
                        
        }catch(error){
                res.message = error;
                res.status(500).send({ mensaje: 'No se pudo completar la solicitud' });           
        }
    });
};