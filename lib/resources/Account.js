'use strict';
var method = require('../Method');
module.exports = require('../Resource').extend({
  path: 'ui/',
  address: method({
    method: 'GET',
    path: 'user_addresses/',
  })
});