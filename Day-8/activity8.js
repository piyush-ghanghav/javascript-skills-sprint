// Day 8: ES6+ Features
// Tasks/Activities:


// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = 'Piyush';
const age = 20;

const str = `Hello, my  name is ${name} and I am ${age} years old. `

console.log(str);
// • Task 2: Create a multi-line string using template literals and log it to the console.
console.log();
console.log('Multi-line string: ');

const multilineString = `Hello, my  name is ${name} and I am ${age} years old.
I am from Nashik, Maharashtra. 
I am a computer Engineer.`;

console.log(multilineString);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log();
console.log("Array Destructuring: ");

let x,y ;
[x,y]= [10,20];
console.log("[x,y]= [10,20];");
console.log("X: ",x);
console.log("Y: ",y);
// • Task 4: • Use object destructuring to extract the title and author from a book object and log them to the console.
console.log();
console.log("Object Destructuring: ");

const book = {
    title : 'In Serarch of Lost Time',
    author : 'Marcel Proust',
}
const {title,author} = book;
console.log("Title: ",title);
console.log("Author: ",author);

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an 
//   existing array plus additional elements, and log the new array to the console.
console.log();
console.log("Spread operator:(... )");
console.log();
{
    const arr = [1,2,3,4];
    const additionalElements = [5,6,7,8,9];

    const newArray = [... arr,...additionalElements];
    console.log(newArray);

}
// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log();
console.log("Rest Operator: ");

function sum(...numbers) {
    return numbers.reduce((sum,number)=>sum+=number,0);
}

var result = sum(1,2,3,4,5);
console.log("Sum : ",result);
result = sum(1,2,3,4,5,6,7,8);
console.log("Sum : ",result);
// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.
//   Log the result of calling this function with and without the second parameter.
console.log();

const product = function(a,b=1){
    return a*b;
}

var result = product(3,10);
console.log("Product 3,10 : ",result);
var result = product(99);
console.log("Product 99 : ",result);



// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log();

const personName = 'Piyush';
const personAge = 20;

const personInfo = {
    personName,
    personAge,
    greet(){
        console.log(`Hello, ${personName}`);
    }
};

console.log(personInfo);
personInfo.greet()


// • Task 9: Create an object with computed property names based on variables and log the object to the console.
console.log();

const key1 = "firstName";
const key2 = "lastName";

const user = {
  [key1]: "Piyush",
  [key2]: "Ghanghav",
  fullName() {
    return `${this[key1]} ${this[key2]}`;
  }
};

console.log(user);
console.log("Fullname: ",user.fullName()); 
