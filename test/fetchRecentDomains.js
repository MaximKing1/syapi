const { Client } = require('../index.js');
const api = new Client();

api.fetchRecentDomains(10000).then(function (response) {
    console.log(response);
})