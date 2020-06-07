'use strict';
/**
 * IIFE means
 * Inmediatly Invoked Function Expression
 */


 (function() {
     var greeting = 'hola';
     console.log('greeting inside', greeting);
 })();

 // it fails because the IIFE has it own scope.
// console.log('greeting outside', greeting);