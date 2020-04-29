const db = require('../../dataBase/conexion');
const  entradaTransferencia = require('../../mapeoObjetos/transferencia/entradaTransferencia');

module.exports.cuentaDestino = async (body) => {
    try {
        const result = await db.query('SELECT nombre from USUARIO WHERE noCuenta=?',
                                        [entradaTransferencia(body).data.cuenta_destino]);
        if(result.length == 1){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
};