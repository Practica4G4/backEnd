module.exports = (body) => {
    const now=new Date();
    return {
        data: {
            monto: body.monto,
            fecha: now,
            cuenta_origen: body.cuentaOrigen,
            cuenta_destino: body.cuentaDestino           
        }
    };
};