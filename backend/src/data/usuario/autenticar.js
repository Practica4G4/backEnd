const db = require('../../dataBase/conexion');
const entradaAutenticar = require('../../../src/mapeoObjetos/usuario/entradaAutenticar');

module.exports.autenticar = async (req) => {
    try {
        const data = entradaAutenticar(req.body).data;
        const result = await db.query('SELECT * FROM USUARIO WHERE noCuenta = ? AND contrasena = ?;', [data.noCuenta, data.contrasena]);
        if (result.length > 0) {
            return result;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};