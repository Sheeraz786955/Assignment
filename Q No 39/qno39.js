"use strict";
// const describe_city=(city: string, country: string)=>{
//     console.log(`${city},${country}`)
// }
// describe_city('Lahore','Pakistan')
// describe_city('Karachi','Pakistan')
// describe_city('Multan','Pakistan')
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return b;
}
function calculate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            throw new Error("Invalid operator.");
    }
}
console.log(calculate('/', 15, 0));
