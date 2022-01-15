const { Client } = require('../index.ts');
const api = new Client();

api.fetchRecentDomains(10000).then(function (response) {
    console.log(response);
})