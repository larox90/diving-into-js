'use strict';

const array = ['one', 'two', 'three', 'four'];

for (const item of array) {
    // iterating the content of each element
    console.log('item', item);
}

for (const [key, value] of array.entries()) {
    // iterating geting the value and key of each item.
    console.log('key', key);
    console.log('value', value);
}