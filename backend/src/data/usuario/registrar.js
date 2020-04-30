const db = require('../../dataBase/conexion');
const entradaRegistro = require('../../../src/mapeoObjetos/usuario/entradaRegistro');

module.exports.registrar = async (params) => {
    try {
        const result = await db.query('INSERT INTO USUARIO set ?', [entradaRegistro(params).data]);
        if (result.affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        //console.log(error)
        return false;
    }
};

module.exports.roolback = async (dpi) => {
    try {
        const data = await db.query('DELETE FROM USUARIO WHERE dpi = ?;', [dpi]);
        if (data.affectedRows > 0) {
            return true;
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false;
    }
};