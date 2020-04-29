const formatoSalidaTipoCambioDia = require('../mapeoObjetos/bancoGuatemala/salidaTipoCambio');
const formatoFechaTipoInicial = require('../mapeoObjetos/bancoGuatemala/formatoFechaTipoInicial');
const { tipoCambioDia, tipoCambioDiaFechaInicial } = require('../external/webservice/bancoGuatemala');
const { formatoEntradaTipoCambioDia } = require('../mapeoObjetos/bancoGuatemala/entradaTipoCambioDia');
const formatoSalidaTipoCambioFechaInicial = require('../mapeoObjetos/bancoGuatemala/salidaTipoCambioFechaInicial');

module.exports.tipoCambioDia = async () => {
    try {
        const data = await tipoCambioDia();
        const dataEntrada = formatoEntradaTipoCambioDia(data);
        return formatoSalidaTipoCambioDia(dataEntrada);
    } catch (error) {
        return null;
    }
};

module.exports.tipoCambioDiaFechaInicial = async (fechaIncial) => {
    try {
        if(!formatoFechaTipoInicial(fechaIncial)) return null
        const data = await tipoCambioDiaFechaInicial(fechaIncial);
        const dataEntrada = formatoEntradaTipoCambioDia(data);
        return formatoSalidaTipoCambioFechaInicial(dataEntrada);
    } catch (error) {
        return null;
    }
};