const db = require('../../dataBase/conexion');
const  entradaTransferencia = require('../../mapeoObjetos/transferencia/entradaTransferencia');

module.exports.saldoOrigen = async (body) => {
    try {
        const result = await db.query('SELECT saldoInicial from USUARIO WHERE noCuenta=? AND saldoInicial>=?',
                                        [entradaTransferencia(body).data.cuenta_origen,
                                        entradaTransferencia(body).data.monto]);
        if(result.length == 1){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
};