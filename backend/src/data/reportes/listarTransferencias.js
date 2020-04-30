const db = require('../../dataBase/conexion');

module.exports.listarTransferencia = async () => {
    try {
        const result = await db.query('SELECT * FROM TRANSFERENCIA;');
        if (result.length > 0) {
            return result;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};