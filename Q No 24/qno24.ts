// Tests for equality and inequality with strings
let fruit = 'apple';

console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit != 'banana');

// Tests using the lower case function
let text = 'Hello, World!';

console.log("Is the lowercased text equal to 'hello, world!'? I predict True.");
console.log(text.toLowerCase() == 'hello, world!');

console.log("Is the lowercased text not equal to 'HELLO, WORLD!'? I predict True.");
console.log(text.toLowerCase() != 'HELLO, WORLD!');

// Numerical tests
let num = 10;

console.log("Is num equal to 10? I predict True.");
console.log(num == 10);

console.log("Is num not equal to 5? I predict True.");
console.log(num != 5);

console.log("Is num greater than 5? I predict True.");
console.log(num > 5);

console.log("Is num less than or equal to 10? I predict True.");
console.log(num <= 10);

// Tests using "and" and "or" operators
let x = 7;
let y = 12;

console.log("Is x greater than 5 and y less than 10? I predict False.");
console.log(x > 5 && y < 10);

console.log("Is x greater than 5 or y less than 10? I predict True.");
console.log(x > 5 || y < 10);

// Test whether an item is in an array
let colors = ['red', 'blue', 'green'];

console.log("Is 'blue' in the colors array? I predict True.");
console.log(colors.includes('blue'));

// Test whether an item is not in an array
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));
