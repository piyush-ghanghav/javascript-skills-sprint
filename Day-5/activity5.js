// Day 5: Functions
// Tasks/Activities:


// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkNumber(num){
    if(num%2 == 0)
        console.log(`${num} is Even Number`) 
    else
        console.log(`${num} is Odd Number`) 
}
checkNumber(2);
checkNumber(3);
checkNumber(99);
// • Task 2: Write a function to calculate the square of a number and return the result.
function getSquare(num){
    return num*num
}
// var num = 2;
var num = 3;
const result = getSquare(num);
console.log(`Sqauare of ${num} is ${result}`);


// Activity 2: Function Expression

// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

    function findMax(n1,n2){
        (n1>=n2)?
        console.log(n1+" is Maximum")
        :
        console.log(n2+" is Maximum")
    }

    findMax(22,3)
// • Task 4: Write a function expression to concatenate two strings and return the result.
    function concatenate(s1,s2){
        return s1+s2
    }
    console.log("Concatenation result: "+ concatenate('Hello ','World!'));


// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
  const square = (a)=>{ return a*a};
  console.log("Square of 3: "+square(3))
  console.log("Square of 4: "+square(4))
  
  // • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
  const containsChar = (str,ch)=> {
      return str.includes(ch);
    }
    
  console.log("Character : "+containsChar('Helllo','H'))
  console.log("Character : "+containsChar('Helllo','h'))


// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function getProduct(a,b=2){
    return a*b;
}
console.log("Product: "+ getProduct(5));        // Takes default value for b 
console.log("Product: "+ getProduct(5,3));
console.log("Product: "+ getProduct(5,0));


// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(n,a = '18'){
 return `Hello ${n}, Are you ${a} years old?`;
}

console.log("Greeting: "+ greet('Piyush' ,'20'))
console.log("Greeting: "+ greet('Om' ))


// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function callNTimes(func,n){
    
    for(let i =0 ;i<n; i++ ){
        func();
    }
}

function sayHello(){
    console.log("Hello! ")
}
callNTimes(sayHello,3);
// • Task 10: Write a higher-order function that takes two functions and a value, 
//            applies the first function to the value, and then applies the second function to the result.

function applyFunctions(func1,func2,val){
    const first_result = func1(val);
    const final_result = func2(first_result);
    return final_result;
}

function double(n){
    return n*2
};

function cube(n){
    return n*n*n;
}

const doubleCube = applyFunctions(double,cube,3);

console.log("Double the cube of 3: "+doubleCube);// 216

