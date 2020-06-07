"use strict";
// list of primitive types

// number
let a = 1;
console.log('typeof a:', typeof a);

// string
let b = 'paco';
console.log('typeof b:', typeof b);

// boolean
let c = false;
console.log('typeof c', typeof c);

// undefined 
let d = undefined;
console.log('typeof d:', typeof d);

// null // --> bug, is detected as object
let f = null;
console.log('typeof f (null?):', typeof f);

// object
let g = {};
console.log('typeof g:', typeof g);

// array
let h = new Array();
console.log('typeof h:', typeof h);

// String
let i = new String();
console.log('typeof h:', typeof i);

// String
let j = function() {};
console.log('typeof h:', typeof j);