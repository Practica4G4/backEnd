const db = require('../../dataBase/conexion');

module.exports = async (noCuenta) => {
    try {
        const result = await db.query(`SELECT saldoInicial FROM practica3.USUARIO where noCuenta = ${noCuenta};`);
        if(result.length > 0){
            return result[0].saldoInicial;
        }else{
            return null;
        }
    } catch (error) {
        return null;
    }
};