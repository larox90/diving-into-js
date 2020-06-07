"use strict";
// using a variable without declaring it.
//a = "using strict mode to throw errors in our mistakes";

//using a object without declaring it.
// console.log({name: 'pancho'}) //---> it doesn´t work...

// using reserved names as variables.
//const console = 'I´m a variable';

// delete object (any kind), attributes.
//const b = 'hola';
//delete b;
//const c = [];
//delete c;

// duplicate parameter names
const d = {name: 'pancho', name: 'ayala'};

// eval is not allow in the global scope (security)
eval('const f = "panchito"'); //---> it doesn´t work...

//console.log(let);