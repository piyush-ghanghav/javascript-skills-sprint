// Activity 5: Memoization
// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn){
    const cache ={};

    return function(...args){

        const key  = JSON.stringify(args);

        if(cache[key]){
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;

    };

}



// • Task 8: Create a memoized version of a function that calculates the factorial of a number.

const factorial  = memoize(function(n){
    if(n<= 1)return 1;
    return n* factorial(n-1);
});


console.log(factorial(5));
console.log(factorial(4));


const fibonacci = memoize(function(n){
    if(n<=1) return n;
    
   return fibonacci(n-1) + fibonacci(n-2); 
});


console.log(fibonacci(10));
console.log(fibonacci(4));

