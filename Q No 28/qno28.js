"use strict";
const n = require('prompt-sync')();
const age = parseInt(n('Please enter your age:'));
if (age < 2) {
    console.log(`Your age is ${age} so you are a baby boy!`);
}
if (age >= 2 && age < 4) {
    console.log(`Your age is ${age} so you are a toddler boy!`);
}
if (age >= 4 && age < 13) {
    console.log(`Your age is ${age} so you are a kid boy!`);
}
if (age >= 13 && age < 20) {
    console.log(`Your age is ${age} so you are a teenager!`);
}
if (age >= 20 && age < 65) {
    console.log(`Your age is ${age} so you are a adult!`);
}
if (age >= 65) {
    console.log(`Your age is ${age} so you are a elder!`);
}
;
