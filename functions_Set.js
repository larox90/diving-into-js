'use strict';

/**
 * Descripcion:
 * It's a list of primitive values or objects, but with the 
 * the condition of being UNIQUE values.
 * 
 * Important:
 * NaN and Undefined but all NaN values is gonna be considered 
 * equals beetween them, even thought NaN !== NaN (on JS)
 */

 /**
  * NEW SET
  * @description it let us create a new Set and we can set or not params
  * it params gonna be evaluated to don´t have any repeated param.
  * @tag inmutable
  */
 console.log('-- new Set --');
 console.log('new Set([1,2,3]) result:', new Set([1,2,3]));
 console.log('new Set([1,2,2]) result:', new Set([1,2,2]), '(it doesn´t add the third element because is a repeated one.)');

 /**
  * ADD
  * @description function to add only one new element on the Set
  * it returns the set.
  * @tag mutable
  */
console.log('-- add --');
const setAdding = new Set();
console.log('set.add(2) result: ', setAdding.add(2));
console.log('set.add(2) result: ', setAdding.add(2), ' (it doesn´t let me add the same value)');
console.log('set:', setAdding, "(event thought the function add return the set, it is mutable)");

/**
 * DELETE
 * @description function to remove one element from the Set by the value.
 * @tag mutable
 */
console.log('-- delete --');
const setDelete = new Set([1,2,3,4,5,6]);
console.log('original set: ', setDelete);
console.log('set.delete(4) result:', setDelete.delete(4), '(it returns a boolean if could remove the value)');
console.log('set.delete(8) result:', setDelete.delete(8), '(it couldn´t, 8 doesn´t exists.)');