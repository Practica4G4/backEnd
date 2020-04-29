module.exports = (data) => {
    if (!data) return null;
    try {
        const arr = data["soap:Envelope"]["soap:Body"].TipoCambioFechaInicialResponse.TipoCambioFechaInicialResult.Vars.Var;
        return arr;
    } catch (error) {
        return null;
    }
};