const { Client } = require('../index.ts');
const api = new Client();

api.fetchDomain("https://google.com").then(function (response) {
    console.log(response);
})