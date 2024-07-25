// Activity 3: Importing Entire Modules
// • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const PI = 3.14;

function circumference(radius) {
    return 2 * PI * radius;
}

function area(radius) {
    return PI * radius * radius;
}

module.exports = { PI, circumference, area };