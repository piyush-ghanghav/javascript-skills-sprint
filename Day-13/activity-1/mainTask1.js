// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

const add = require('./mathModule');

const num1 = 2;
const num2 = 8;

const result = add(num1,num2);

console.log(`Reult of ${num1} + ${num2}: ${result}`);
