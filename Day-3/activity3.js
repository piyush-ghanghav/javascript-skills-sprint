// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// let num = 10;
// let num = -10;
let num = 0;

if(num>0){
    console.log("Positive Number: ",num);
}
else if(num<0){
    console.log("Negative Number: ",num);
}
else{
    console.log("Zero: ",num);
}


// • Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the console.


// let age = 17;
// let age = 18;
let age = 19;

if(age>=18){
    console.log("Eligible to Vote: ");
}
else{
    console.log("Not Eligible to Vote: ");
}

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let n1 = 0;
let n2 = 1;
let n3 = 2;

if(n1 >= n2){
    if(n1 >= n3 ){
        console.log("Largest Number:", n1);
    }
    else{
        console.log("Largest Number:", n3);
    }
}
else{
    if(n2 >= n3 ){
        console.log("Largest Number:", n2);
    }
    else{
        console.log("Largest Number:", n3);
    }
}



// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function getDayName(dayNum){
    let dayName;
    switch (dayNum) {
        case 1:
            dayName = 'Sunday';
            break;
    
        case 2:
            dayName = 'Monday';
            break;
    
        case 3:
            dayName = 'Tuesday';
            break;
    
        case 4:
            dayName = 'Wednesday';
            break;
    
        case 5:
            dayName = 'Thursday';
            break;
    
        case 6:
            dayName = 'Friday';
            break;
    
        case 7:
            dayName = 'Saturday';
            break;
            
        default:
            dayName = 'Enter valid day Number';
            break;
    }
    return dayName;
}
const dayNum = 2;
const dayName = getDayName(dayNum);
console.log("Day: ",dayName);

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function getGrade(score){
    let grade;
    switch(true) {
        case score>=90:
            grade = 'A';
            break;
    
        case score>=80:
            grade = 'B';
            break;
    
        case score>=70:
            grade = 'C';
            break;
    
        case score>=45:
            grade = 'D';
            break;
    
        case score>=0:
            grade = 'F';
            break;
    
        default:
            grade = 'Enter valid score';
            break;
    }
    return grade;
}
const score = 85;
const grade = getGrade(score);
console.log("Grade: ",grade);


// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
// let n = 2;
let n = 3;

(n%2==0)
?
console.log("Even Number",n)
:
console.log("Odd Number",n)
;

// Activity 5: Combining Conditions
    var year = 2000 
    // var year =  2100
    // var year =  2001

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap Year: ",year)   }
    else {
        console.log("Not Leap Year: ",year)   
    }
    
