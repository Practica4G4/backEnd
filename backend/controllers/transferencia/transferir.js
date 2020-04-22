const db = require('../../src/dataBase/conexion');
module.exports = function (router) {

    router.post('/', async(req, res) => {
       try{
           const  entradaTransferencia = require('../../src/mapeoObjetos/transferencia/entradaTransferencia');
        
            //insercion a la base de datos
            const result = await db.query('INSERT INTO TRANSFERENCIA (monto,fecha,cuenta_origen,cuenta_destino) (SELECT ?,?,?,? FROM USUARIO WHERE saldoInicial >= ? and noCuenta=?)',
                                        [entradaTransferencia(req.body).data.monto,
                                        entradaTransferencia(req.body).data.fecha,
                                        entradaTransferencia(req.body).data.cuenta_origen,
                                        entradaTransferencia(req.body).data.cuenta_destino,
                                        entradaTransferencia(req.body).data.monto,
                                        entradaTransferencia(req.body).data.cuenta_origen]);

            console.log(result);
            if(result.affectedRows == 1){
                const result2 = await db.query('UPDATE USUARIO SET saldoInicial=saldoInicial + ? where noCuenta=?',
                                        [entradaTransferencia(req.body).data.monto,
                                        entradaTransferencia(req.body).data.cuenta_destino]);
                const result3 = await db.query('UPDATE USUARIO SET saldoInicial=saldoInicial - ? where noCuenta=?',
                                        [entradaTransferencia(req.body).data.monto,
                                        entradaTransferencia(req.body).data.cuenta_origen]);

                if(result2.affectedRows==1 && result3.affectedRows==1){
                    res.status(200).send({ mensaje: "Transferencia realizada" });
                }else{
                    res.status(400).send({ mensaje: "Transferencia no realizada, no se pudo acreditar a las cuentas." });
                }
                                                   
            }else{
                res.status(400).send({ mensaje: "Transferencia no realizada" });
            } 
        }catch(error){
                console.log(error);
                res.message = error;
                res.status(500).send({ mensaje: 'No se pudo completar la solicitud' });           
        }
    });
};