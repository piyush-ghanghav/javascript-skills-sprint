// Activity 4: Assertions and Boundaries
// • Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const str7 = "Hello world! Hello everyone!";
const regex7 = /^\w+/; // Matches one or more word characters at the beginning of the string

const matches7 = str7.match(regex7);

if (matches7) {
    console.log("Task 7 Matches:", matches7);
} else {
    console.log("No matches found.");
}


// • Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const str8 = "Goodbye world! See you later!";
const regex8 = /\w+$/;
const matches8 = str8.match(regex8);

if (matches8) {
    console.log("Task 8 Matches:", matches8);
} else {
    console.log("No matches found.");
}
