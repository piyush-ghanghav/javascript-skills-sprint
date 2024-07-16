// Day 4: Loops
// Tasks/Activities:


// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.

console.log("Numbers from 1 to 10: ");
for(let i = 1; i<=10; i++){
    console.log(i);
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log("Table of 5: ");
for(let i = 1; i<=10; i++){
    console.log(5*i);
}   
// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
console.log("Sum of Numbers from 1 to 10: ");
var sum = 0;
for(let i = 1; i<=10; i++){
    sum += i;
}
console.log(sum);
// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log("Numbers from 10 to 1: ");
var i =10;
    while(i>=1){
        console.log(i);
        i--;
    }
    
    // Activity 3: Do...While Loop
    // • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
    console.log("Numbers from 1 to 5: ");
    var i = 1;
    do{
        console.log(i)
        i++;
    }while(i<=5);
    // • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
    let result = 1;
    var i = 4;
    
    do {
        result *= i;
        i--;
    } while (i > 0);
    console.log("Factorial: ",result);
    // Activity 4. • Nested Loops
    // • Task 7: Write a program to print a pattern using nested for loops:
    console.log("Pattern: ");
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === 1) {
                pattern += "* "; // First star in each row
            } else {
                pattern += "* "; // Other stars
            }
        }
        pattern += "\n";
    }
    
    console.log(pattern);
    
// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.


console.log("Numbers from 1 to 10 without 5 ");
for(let i = 1; i<=10; i++){
    if (i == 5) continue;
    console.log(i);
}


// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log("Numbers from 1 to 10 stopping after 7 ");
for(let i = 1; i<=10; i++){
    if (i == 7) break;
    console.log(i);
}

