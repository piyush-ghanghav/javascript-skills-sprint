// Activity 2: Practical Closures
// • Task 3: Write a function that generates unique 'Ds. Use a closure to keep track of the last generated ID and increment it with each call.

function createIDGenerator(){
    let lastID = 0;
    return function(){
        lastID +=1 ;
        return `ID${lastID}`;
    };
    
}

const generateID = createIDGenerator();

console.log(generateID());
console.log(generateID());
console.log(generateID()); 


// This can be used for generating ID's for 1. DOM elements 2. Database records 3. Temporary file name generation






// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.


function createGreeting(user){
    
    return function(){
        return `Hello ${user}`;
    }
}

const greetUser = createGreeting('Piyush');

console.log(greetUser());