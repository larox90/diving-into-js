"use strict";

const a = ['hola', 'mundo'];

// if we send settimeout without time works good?
a.forEach((val, key) => {
    setTimeout(() => {
        console.log('val', val);
    }, 0);
    console.log('key', key);
});

// wtf! 
/*
for(var i = 0; i < 5; i++) {
    setTimeout(()=> {
        console.log('i', i);
    })
}
*/