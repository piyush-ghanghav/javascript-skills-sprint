// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
console.log("Task 1");
function throwError(){
    throw new Error("Intential Error");
}

try {
    throwError();
} catch (error) {
    console.log("An Error Occured:"+ error.message);
}

console.log();

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
console.log("Task 2");

function division(a,b){
    if(b == 0 )
        {
        throw new Error("Division by zero not allowed");
    }
    return a/b;
}

try {

   let result1 = division(10,0);
   console.log("Result: ",result1);

} catch (error) {
    console.error("ZeroDivision Error:",error.message);
}
finally{
    console.log("Thank You");
}
