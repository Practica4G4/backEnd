const db = require('../../dataBase/conexion');

module.exports.transRealizadas = async (noCuenta) => {
    try {
        const result = await db.query('SELECT * FROM TRANSFERENCIA WHERE cuenta_origen = ?;',[noCuenta]);
        if (result.length > 0) {
            return result;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};