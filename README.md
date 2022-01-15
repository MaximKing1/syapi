# SinkingYachts Phishing Domain API
[SinkingYachts Phishing Domain API](https://phish.sinking.yachts/) JavaScript Unofficial Wrapper - https://phish.sinking.yachts/docs

# Installing
## NPM (recommended)

```js
# Stable
npm i --save syapi
```

## Yarn

```js
# Stable
yarn add syapi
```

# Functions
## Request Domain

```js
const { Client } = require('../index.js');
const api = new Client();

api.fetchDomain("https://google.com").then(function (response) {
    console.log(response);
});
```
