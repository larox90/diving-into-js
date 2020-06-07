'use strict';

const my_array = [1,2,3,4,5];
console.log('original', my_array);
/**
 * CONCAT 
 * @description this function received one array as parameter
 * and it return a new array with both arrays concated.
 * @tags inmutable
 */
console.log('-- concat --');
const other_array = [6,7,8,9,10];
const concated_array = my_array.concat(other_array);
other_array.push([11,12])
const concated_multi_array = my_array.concat(other_array);
console.log('concat: ', concated_array);
console.log('concat (multi): ', concated_multi_array);


/**
 * INDEXOF
 * @description this function find the position of the first match
 * of the parameter received, if we dont have match it return -1
 * @tag inmutable
 */
console.log('-- indexOf --');
const index_of_three = my_array.indexOf(3);
const index_of_cero = my_array.indexOf(0);
console.log('index of three', index_of_three);
console.log('index of cero', index_of_cero);

/**
 * JOIN
 * @description this function join each element in the array and return
 * an string with all elements separated by coma or the separator that you provide
 * as parameter in the join function
 * @tag inmutable
 */
console.log('-- join --');
const join_coma = my_array.join();
const join_slash = my_array.join('/');
console.log('join by coma', join_coma);
console.log('join by slash', join_slash);

/**
 * LAST INDEX OF
 * @description this function return the index of the last match of one element that
 * received as parameter, if it doesn´t exist in the array it returns -1
 * @tag inmutable
 */
console.log('-- lastIndexOf --');
const my_repeated_array = [...my_array, 1];
const last_index_of_one = my_repeated_array.lastIndexOf(1);
const last_index_of_cero = my_repeated_array.lastIndexOf(0);

console.log('repeted array', my_repeated_array);
console.log('last indexOf One', last_index_of_one);
console.log('last indexOf Cero', last_index_of_cero);

/**
 * POP 
 * @description this function remove from the array and return the last item in it.
 * @tag mutable
 */
console.log('-- pop --');
const my_popped_array = [...my_array];
const my_popped_item = my_popped_array.pop();

console.log('popped array', my_popped_array);
console.log('popped item', my_popped_item);

/**
 * PUSH
 * @description this function add a one last item on the array
 * it returns the new lenght in the array.
 * @tag mutable
 */

console.log('-- push --');
const my_pushed_array = [...my_array];
const new_lenght_array = my_pushed_array.push(6);

console.log('pushed array', my_pushed_array);
console.log('new lenght', new_lenght_array);

/**
 * REVERSE
 * @description this function return the reverse of the array
 * it means the last position it´ll be the first one and the first the last one.
 * @tag inmutable
 */

console.log('-- reverse --');
const my_cloned_array = [...my_array];
const my_reversed_array = my_cloned_array.reverse();

console.log('my reversed_array', my_reversed_array);

/**
* SHIFT (in spanish desplazarse)
* @description this function like pop, remove a element but this one take the first one
* and return it.
* @tag mutable
*/
console.log('-- shift --');
const my_shifted_array = [...my_array];
const my_shifted_item = my_shifted_array.shift();

console.log('shifted array', my_shifted_array);
console.log('shifted item', my_shifted_item);

/**
 * SLICE (in spanish rebanada)
 * @description this fuction return a shallow copy of our original array, the original array isn´t
 * modified, this function can receive two parameters the first index of the slice and the second one
 * is the limit index of the slice, it means slice until before that index.
 * @tag inmutable
 */
console.log('-- slice --');
console.log('original', my_array);
let my_start_slice_index = 0;
let my_slice_before_index = 4;
let my_sliced_array = my_array.slice(my_start_slice_index, my_slice_before_index);
console.log('my start slice index', my_start_slice_index);
console.log('slice before of index', my_slice_before_index);
console.log('my sliced array', my_sliced_array);

/**
 * SORT
 * @description this function soft the current array, by default it does ascending.
 * to sort by a function it will received two parameter (A, B), and use the next rule
 * return lest than 0 when set A in a lower index than B
 * return 0 when set dont change the.
 * return more than 1 when set B in a lower index than A
 * @tag mutable
 * 
 */
console.log('-- sort --');
const my_sorted_array = [2,6,1,3,8,5];

console.log('original', my_reversed_array);
my_sorted_array.sort();
console.log('asc sorted array', my_sorted_array);
my_sorted_array.sort((a,b) => {
    if (b > a) {
        return 1;
    } else if (b === a) {
        return 0
    }
    
    return -1;
});

console.log('desc sorted array', my_sorted_array);

/**
 * SPLICE (in spanish EMPALME)
 * this function let us add, remove and replace elements from an array
 * the first parameter received the index where we want to start, with the condition that 
 * if the index is bigger than the lenght, we´ll use the lenght -1, and if the index is 
 * negative then we´ll count from the last position to below, it means if our first parameter
 * is -1 then we´ll start from lenght -1. 
 * the second parameter (optional) says us the number of element to remove from the start (first parameter),
 * if this parameter is omitted or is bigger than the size then it´ll remove all the elements. 
 * the next one parameter (optional) is the item that we want to add to our array from the start
 * position (first parameter). we can add more that one element.
 * @tag mutable
 */
console.log('-- splice --');
console.log('origin ', my_array);
const splice_remove_array = [...my_array];
const splice_repliced_array = [...my_array];
const splice_added_array = [...my_array];
const splice_remove_returned_array = splice_remove_array.splice(0, 1);
const splice_repliced_returned_array = splice_repliced_array.splice(0, 1, 7);
// to point to the last position we need to send the size of the array instead the size -1 (last index).
const splice_added_returned_array = splice_added_array.splice(splice_added_array.length, 0, 7);

console.log('splice (remove) array', splice_remove_array);
console.log('splice (remove) array returned', splice_remove_returned_array);
console.log('splice (repliced) array', splice_repliced_array);
console.log('splice (repliced) array returned', splice_repliced_returned_array);
console.log('splice (added) array', splice_added_array);
console.log('splice (added) array returned', splice_added_returned_array);

/**
 * TO STRING 
 * this functions return a string of the array but it doesn´t
 * receive any joiner parameter as join function, it join the
 * elements by comma by default.
 * @tag inmutable
 */
console.log('-- toString --');
const string_from_array = my_array.toString();
console.log('original', my_array);
console.log('string from array', string_from_array);

/**
 * UN SHIFT (in spanish NO CAMBIAR (no tiene sentido))
 * @description this function add one o more attribute in the
 * first index(s) of the array.
 * @tag mutable.
 * @returns the new lenght
 */

 console.log('-- unshift --');
 const unshift_array = [...my_array];
 unshift_array.unshift(10)
 console.log('add num 10 to the initial', unshift_array);
 unshift_array.unshift(11, 12)
 console.log('add num 11 and 12 to the initial', unshift_array);

 /**
  * VALUE OF
  * @description return the primitive value of the element 
  * selected.
  * @tag inmutable
  */

  console.log('-- valueOf --')
  const my_string = new String('Hola Mundo');
  console.log('original string', my_string);
  const my_primitive_string = my_string.valueOf();
  console.log('primitive string', my_primitive_string);
