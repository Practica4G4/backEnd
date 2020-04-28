module.exports = (data) => {
    if (!data) return null;
    try {
        const { fecha, referencia } = data["soap:Envelope"]["soap:Body"].TipoCambioDiaResponse.TipoCambioDiaResult.CambioDolar.VarDolar;
        return {
            fecha,
            tipoCambio: referencia
        }
    } catch (error) {
        return null;
    }
};