'use strict';

const my_array = [1,2,3,4,5];

/**
 * FROM
 * @description Array object function that help us to make
 * a new array from one iterable object.
 * (optional) We can modify each element passing a function as second parameter
 * (optional) the third parameter receive the context of the function passed in the second one.
 * @tag inmutable
 */
console.log('-- Array.from --');
const my_from_string = 'francisco';
const my_from_array = Array.from(my_array);
const my_from_string_array = Array.from(my_from_string);
const my_from_array_with_map = Array.from(my_array, item => item * item); // arrow function in the second parameter.

console.log('original array', my_array);
console.log('new array from original cloned', my_from_array);
console.log('new array from original with map (item*item)', my_from_array_with_map);
console.log('my string', my_from_string);
console.log('new array from my string', my_from_string_array);


/**
 * IS ARRAY
 * @description Array Object function to check if one received parameter is 
 * one array, returns a boolean.
 * @tag inmutable
 */

console.log('-- Array.isArray --');
const is_array_from_original = Array.isArray(my_array);
const is_array_from_string = Array.isArray(my_from_string);
console.log('my array', my_array);
console.log('Is my original Array?', is_array_from_original);
console.log('my string', my_from_string);
console.log('Is my string Array?', is_array_from_string);

/**
 * COPY WITHIN (spanish: copiar adentro)
 * @description this function modify the current array moving the current items
 * to a new position. it function receive atless 2 parameters. 
 * the first one, is the index that receive the parameter copied
 * the second one, is the index from we start to copy
 * the third one (optional), is the index to end to copy, be careful if we don´t add
 * this last paremter we´ll copy all the next position from we start (second one).
 * this function don´t change the lenght of our current array, if we don´t cover all position
 * with the copy index, then i´ll continue with the current no cover info.
 * @tag mutable
 */

console.log('-- copyWithin --')
const copywithin_array_without_end = Array.from(my_array);
const copywithin_array_with_end = Array.from(my_array);
copywithin_array_without_end.copyWithin(0, 2);
copywithin_array_with_end.copyWithin(0, 2, 3);
console.log('my original array', my_array);
console.log('copy within without end (0,2)', copywithin_array_without_end);
console.log('copy within with end (0,2, 3)', copywithin_array_with_end);
 