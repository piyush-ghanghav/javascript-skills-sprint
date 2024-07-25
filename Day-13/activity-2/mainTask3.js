// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const {add,sub,div,mul} = require('./namedExportsModule')

console.log(add(8,2));
console.log(sub(8,2));
console.log(div(8,2));
console.log(mul(8,2));
