const { Client } = require('../index.js');
const api = new Client();

api.fetchDomain("https://google.com").then(function (response) {
    console.log(response);
})