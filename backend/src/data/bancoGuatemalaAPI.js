const { tipoCambioDia } = require('../external/webservice/bancoGuatemala');
const { formatoEntradaTipoCambioDia } = require('../mapeoObjetos/bancoGuatemala/entradaTipoCambioDia');
const formatoSalidaTipoCambioDia = require('../mapeoObjetos/bancoGuatemala/salidaTipoCambio');

module.exports.tipoCambioDia = async () => {
    try {
        const data  = await tipoCambioDia();
        const dataEntrada = formatoEntradaTipoCambioDia(data);
        return formatoSalidaTipoCambioDia(dataEntrada);
    } catch (error) {
        return null;
    }
};