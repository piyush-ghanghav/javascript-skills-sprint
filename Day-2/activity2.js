// Activity 1: Arithmetic Operations

let num1 = 10;
let num2 = 20;

console.log("num 1: ",num1);
console.log("num 2: ",num2);

// Task 1: Write a program to add two numbers and log the result to the console.
let add = num1 + num2;
console.log("Addition: ",add);


// Task 2: Write a program to subtract two numbers and log the result to the console.
let sub = num1 - num2;
console.log("Subtraction: ",sub);

// Task 3: Write a program to multiply two numbers and log the result to the console.
let mul = num1 * num2;
console.log("Multiplication: ",mul);

// Task 4: Write a program to divide two numbers and log the result to the console.
let div = num1 / num2;
console.log("Division: ",div);


// Task 5:Write a program to find the remainder when one number is divided by another and log the result to the console.
let rem = num1 % num2;
console.log("Remainder: ",rem);

// // Activity 2: Assignment Operators


//  Task 6: Use the += operator to add a number to a variable and log the result to the console.
let num = 30;
console.log("num: ",num);
num += 10;
console.log("num += 10:",num);
//  Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let _num = 30;
console.log("_num: ",_num);
_num -= 10;
console.log("_num -= 10:",_num);


// // Activity 3: Comparison Operators

let n1 =10;
let n2 = 5;

console.log("num 1: ",n1);
console.log("num 2: ",n2);
//  Task 8: Write a program to compare two numbers using > and < and log the result to the console.
if(n1>n2){
    console.log(n1+" Greater than "+n2)
}else if(n2>n1){
    console.log(n2+" Greater than "+n1)
}
else{
    console.log(n2+" Equal to "+n1)
}

//  Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

if(n1>=n2){
    console.log(n1+" Greater than OR Equal to "+n2)
}else if(n2>=n1){
    console.log(n2+" Greater than OR Equal to "+n1)
}
else{
    console.log(n2+" Equal to "+n1)
}
//  Task 10: Write a program to compare two numbers using == and === and log the result to the console.
n1 = 1;
n2 = '1';

console.log("==");
if(n1 == n2){
    console.log(n1 +" equal to '"+n2+"'");
}
else{
    console.log(n1 +" not equal to '"+n2+"'");
}
console.log("===");
if(n1 === n2){
    console.log(n1 +" equal to '"+n2+"'");
}
else{
    console.log(n1 +" not equal to '"+n2+"'");
}

// Activity 4: Logical Operators
console.log("num 1: ",num1);
console.log("num 2: ",num2);


//  Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
console.log("n1 > 5 && n2 < 15 :")    
console.log(num1 > 5 && num2 < 15)
//  Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log("n1 > 5 || n2 < 15 :")    
console.log(num1 > 5 || num2 < 15)
//  Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
    const isTrue = true;
    console.log(!isTrue);

// Activity 5: Ternary Operator

//  Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

// let no = 20;
let no = -20;
(no === 0)?
    console.log("Zero:",no)
    :
    (no>0)?
    console.log("Positive Number:",no)
    :
    console.log("Negative Number:",no);
