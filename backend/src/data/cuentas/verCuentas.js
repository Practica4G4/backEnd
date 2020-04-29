const db = require('../../dataBase/conexion');

module.exports.verCuentas = async () => {
    try {
        const result = await db.query('SELECT CONCAT(nombre," ",apellido) as nombre,noCuenta FROM USUARIO');
        if(result.length > 0){
            return result;
        }else{
            return null;
        }
    } catch (error) {
        return null;
    }
};