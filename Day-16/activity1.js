
// Activity 1:Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n){

    if(n===0){
        return 1;
    }
    return n*factorial(n-1)

}

console.log('Factorial:');
const fact = factorial(3);
console.log(fact);

console.log();
console.log("Fibonacci Nums:");


// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n){

    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}



console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

