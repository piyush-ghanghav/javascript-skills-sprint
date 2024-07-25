// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import myAddFunction from './defaultExportModule.js';
const result = myAddFunction(5, 10);
console.log(result);