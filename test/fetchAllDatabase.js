const { Client } = require('../index.js');
const api = new Client();

api.fetchAllDomains().then(function (response) {
    console.log(response);
})