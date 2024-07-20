// Day 7: Objects
// Tasks/Activities:


// Activity 1: Object Creation and Access

// • Task 1. Create an object representing a book1 with properties like title, author, and year, and log the object to the console.

    const book1 = {
        title : 'In Serarch of Lost Time',
        author : 'Marcel Proust',
        year : 1913
    };

    console.log(book1);


// • Task 2: Access and log the title and author properties of the book object.
console.log("Title: " + book1.title);
console.log("Author: " +book1.author);


// Activity 2: Object Methods

// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
    book1.getDetails = function(){
        return `The title of the book is ${this.title} and it is written by ${this.author}`;
    };
    console.log(book1.getDetails());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
    book1.updateYear = function(newYear){
            this.year = newYear;
    }
    console.log("Original Year: "+book1.year);
    book1.updateYear(2015);
    console.log("Updated Year: "+book1.year);
// Activity 3: Nested Objects

// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

// Creating more book objects;
const book2 = {
    title : 'Ulysses',
    author: 'James Joyce',
    year: 1922
};
const book3 = {
    title : 'The Alchemist ',
    author: 'Paulo Coelho',
    year: 1988
};

const library = {
    title : 'The Library',
    books : [book1,book2,book3]
};


// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log();
console.log('Libary Name: ',library.title);
console.log('Available Books: ');
library.books.forEach(book => {
    console.log(book.title);  
});

// Activity 4: The this Keyword
console.log();

// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book2.getYear = function(){
    return `The title of the book is ${this.title} and it is published in ${this.year}`;
};
console.log(book2.getYear());


// Activity 5: Object Iteration

// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
console.log();
console.log("Properties of the BOOK:");
for(let property in book1){
    if(book1.hasOwnProperty(property))
        console.log(`${property}: ${book1[property]}`);
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log();
console.log("Use Object.keys: ");
console.log(Object.keys(book1));


console.log();
console.log("Use Object.keys: ");
console.log(Object.values(book1));
