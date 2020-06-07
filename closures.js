'use strict';
/**
 * Closure is when a function remembers and continues to access variables from outside its scope, 
 * even when the function is executed in a different scope.
 */
function Say(word) {
    return function to(name) {
        return `${word} ${name}`;
    }
}

SayHello = new Say('Hello');
SayBye = new Say('Bye');

console.log(SayHello('Francisco'))
console.log(SayHello('Stephanie'))
console.log(SayBye('Francisco'))
console.log(SayBye('Stephanie'))