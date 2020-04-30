const db = require('../../dataBase/conexion');

module.exports.transRecibidas = async (noCuenta) => {
    try {
        const result = await db.query('SELECT * FROM TRANSFERENCIA WHERE cuenta_destino = ?;',[noCuenta]);
        if (result.length > 0) {
            return result;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};