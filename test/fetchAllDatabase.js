const { Client } = require('../index.ts');
const api = new Client();

api.fetchAllDomains().then(function (response) {
    console.log(response);
})