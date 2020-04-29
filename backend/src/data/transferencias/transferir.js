const db = require('../../dataBase/conexion');
const  entradaTransferencia = require('../../mapeoObjetos/transferencia/entradaTransferencia');

module.exports.transferir = async (body) => {
    try {
        
        const result = await db.query('INSERT INTO TRANSFERENCIA set ?',
                                        [entradaTransferencia(body).data]);
            if(result.affectedRows == 1){
                const result2 = await db.query('UPDATE USUARIO SET saldoInicial=saldoInicial + ? where noCuenta=?',
                                        [entradaTransferencia(body).data.monto,
                                        entradaTransferencia(body).data.cuenta_destino]);
                const result3 = await db.query('UPDATE USUARIO SET saldoInicial=saldoInicial - ? where noCuenta=?',
                                        [entradaTransferencia(body).data.monto,
                                        entradaTransferencia(body).data.cuenta_origen]);

                if(result2.affectedRows==1 && result3.affectedRows==1){
                    return true;
                }else{
                    return false;
                }
                                                   
            }else{
                return false;
            }
    } catch (error) {
        return false;
    }
};