// Activity 2: Character Classes and Quantifiers
// • Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const str1 = "JavaScript is a Versatile language. Many developers Love JavaScript.";
const regex1 = /\b[A-Z][a-z]*\b/g;
const matches1 = str1.match(regex1);
console.log("Task 1 Matches:", matches1);



// • Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.


const str2 = 'The event is on 2023-07-31 at 10:30 AM and will last for 2 hours.';
const regex2 = /\d+/g;
const matches2 = str2.match(regex2);
console.log("Task 2 Matches: ",matches2);