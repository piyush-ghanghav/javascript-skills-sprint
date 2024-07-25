// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = require('./personModule')

console.log(person.name);
person.greet();