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
const { Client } = require('syapi');
const api = new Client();

api.fetchDomain("https://google.com").then(function (response) {
    console.log(response);
});
```

## Fetch All Domains

```js
const { Client } = require('syapi');
const api = new Client();

api.fetchAllDomains().then(function (response) {
    console.log(response);
});
```

## Fetch Recent Domains

```js
const { Client } = require('syapi');
const api = new Client();

api.fetchRecentDomains(10000).then(function (response) {
    console.log(response);
});
```

## Fetch Database Size

```js
const { Client } = require('syapi');
const api = new Client();

api.DBSize().then(function (response) {
    console.log(response);
});
```
