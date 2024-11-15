const cds = require('@sap/cds');
const fetch = require('node-fetch');

module.exports = cds.service.impl(async function () {
    const { Books } = this.entities;

    this.on('READ', Books, async (req) => {
        const destination = await cds.connect.to('Ownodata');
        const response = await fetch(destination.url + '/sap/opu/odata/sap/http://sapbtp.com:8023', {
            headers: {
                'Authorization': `Basic ${Buffer.from(destination.username + ':' + destination.password).toString('base64')}`
            }
        });

        const data = await response.json();
        return data.d.results;
    });
});
