// • Task 6: Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.


// npm install lodash


// Lodash simplifies JavaScript coding by providing utility functions 
// for common tasks like array manipulation, object handling, and string operations, enhancing code readability and efficiency. 
// It ensures cross-browser compatibility, reducing bugs and inconsistencies

const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
console.log(_.reverse(array)); // [5, 4, 3, 2, 1]
