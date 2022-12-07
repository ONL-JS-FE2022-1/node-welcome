'use strict';

const _ = require('lodash');

const div = document.querySelector('#root');
div.append('HELLO, NODE!!!!!');

console.log('INDEX.JS START');
console.log(`Random number: ${_.random(1, 10, false)}`);
console.log('INDEX.JS END');