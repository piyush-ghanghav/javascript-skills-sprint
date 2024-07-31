// Activity 1: Basic Regular Expressions
// • Task 1: Write a regular expression to match a simple pattern 
// (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.


// • Task 2: Write a regular expression to match all digits in a string. Log the matches.

const str2 = 'Hello 1 2 2121 sdsnden223w';
const regex2 = /\d+/g;
const matches2 = str2.match(regex2);
console.log("Task 2 Matches: ",matches2);