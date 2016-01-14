var Demock = require('demock'),
    axios = require('axios'),
    axiosDemock = require('axios-demock');

// @todo include https://github.com/jakearchibald/es6-promise

var demock = new Demock();

demock.appendRequestFilter(Demock.requestFilters.method());
demock.appendRequestFilter(Demock.requestFilters.defaultDocument({ defaultDocument: 'index.json' }));
demock.appendResponseFilter(Demock.responseFilters.delay());

axiosDemock.intercept(axios, demock);

axios.get('api/foo', { params: { id: 3 } }).then(function (response) {
    console.log(response);
});

axios.post('api/foo').then(function (response) {
    console.log(response);
});
