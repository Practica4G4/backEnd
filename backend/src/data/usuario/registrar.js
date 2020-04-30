const db = require('../../dataBase/conexion');
const entradaRegistro = require('../../../src/mapeoObjetos/usuario/entradaRegistro');

module.exports.registrar = async (req) => {
    try {
        const result = await db.query('INSERT INTO USUARIO set ?', [entradaRegistro(req.body).data]);
        if (result.affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error)
        return false;
    }
};