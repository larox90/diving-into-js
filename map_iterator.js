'use strict';

let buttons = new Map();

buttons.set('btn 1', {id: 1});
buttons.set('btn 2', {id: 2});

for(let [btn, btnName] of buttons) {
    console.log('btn', btn);
    console.log('btnName', btnName);
}

for(let button of buttons) {
    // get a tupla with two elements.
    console.log('button', button);
    // get a specific attribute within the tupla.
    console.log('button[0]', button[0]);
}

// it has other methods alternatives to values, are keys() and values()
for(let button_value of buttons.values()) {
    // iterate over values
    console.log('button_value', button_value);
}