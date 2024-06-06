const cds = require('@sap/cds');
const { query } = require('express');

module.exports = async (srv) => {

    const sord = await cds.connect.to('API_SALES_ORDER_SRV');

    srv.on('READ','A_SalesOrder', (req) => {
        return sord.transaction(req).send({
            query : req.query,
            headers: {
                apikey: 'GsBv8vh5ewqNMv1zvQERAKp3IVTpE7PB'
            }

    });
    });

}