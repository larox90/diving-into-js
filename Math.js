/**
 * Diving into Math API JS functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 * this Object just has static methods and properties
 */

console.log('## Math ##');

console.log('--- static methods ---');

/**
 * Math.ceil(x)
 * it accept a number, rounds up (decimals) to the next largest number
 * this function is the opposite of floor 
 */
console.log('-- Math.ceil(x), rounds up to next largest number --');
console.log('Math.ceil(19.87)', Math.ceil(19.87));
console.log('Math.ceil(1.01)', Math.ceil(1.01));
console.log('Math.ceil(1987)', Math.ceil(1987), 'nothing change because its an integer');
console.log('Math.ceil(-9.99)', Math.ceil(-9.99), 'its negative so the largest is inverted');
console.log('Math.ceil("hello")', Math.ceil("hello"), 'for types different to number or null it returns NaN');
console.log('Math.ceil(null)', Math.ceil(null), 'for null value it returns 0');
/**
 * Math.floor(x)
 * it accept a number, returns the largest integer less than or equals to a given number
 */
console.log('-- Math.floor(x), returns the largest integer less than or equals to a given number --');
console.log('Math.floor(19.99)', Math.floor(19.99));
console.log('Math.floor(10.01)', Math.floor(10.01));
console.log('Math.floor(1901)', Math.floor(1901), 'its an integer, doesnt change');
console.log('Math.floor("hello")', Math.floor("hello"), 'for types different to number or null it returns NaN');
console.log('Math.floor(null)', Math.floor(null), 'for null value it returns 0');

/**
 * Math.round(x)
 * it accepts a number an returns the value of the number rounded to the nearest integer
 */
console.log('-- Math.round(x), returns the value of the number rounded to the nearest integer --');
console.log('Math.round(19.89)', Math.round(19.89));
console.log('Math.round(19.09)', Math.round(19.09));
console.log('Math.round(19.50)', Math.round(19.50), 'since a half it goes to up');
console.log('Math.round(1901)', Math.round(1901), 'its an integer, doesnt change');
console.log('Math.round("hello")', Math.round("hello"), 'for types different to number or null it returns NaN');
console.log('Math.round(null)', Math.round(null), 'for null value it returns 0');

/**
 * Math.random()
 * doesn't receive params, A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
 */
 console.log('-- Math.random(), returns a floating number between 0 and 1 with 16 decimals -- ')
 console.log('Math.random()', Math.random());
 // function to get an integer random name using floor and random
 function getRandomInt(max) {
     const random = Math.random();
     const floorOfMax = Math.floor(max);
     const maxByRandom = random * floorOfMax;
     const floorOfMaxByRandom = Math.floor(maxByRandom);
     const floorFrom1ToMaxRandom = floorOfMaxByRandom +1;
    console.log('get random int between range (20): step1 Math.random()', random);
    console.log('get random int between range (20): step2 Math.floor(max)', floorOfMax);
    console.log('get random int between range (20): step3 Math.random() * Math.floor(max)', maxByRandom);
    console.log('get random int between range (20): step4 Math.floor(Math.random() * Math.floor(max))', floorOfMaxByRandom);
    console.log('get random int between range (20): step5 Math.floor(Math.random() * Math.floor(max)) + 1', floorFrom1ToMaxRandom);
    return floorFrom1ToMaxRandom;
 }
 console.log('get random int between range (20): result:', getRandomInt(20), 'random from 1 to 20');