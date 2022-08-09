'use strict';
var method = require('../Method');
module.exports = require('../Resource').extend({
  path: 'transactions/',
  operations: ['create', 'list', 'retrieve'],
  search: method({
    method: 'GET',
    path: 'search/{q}',
    urlParams: ['q']
  })
});

