
// Activity 5:Dynamic Programming (Optional)
// • Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n) {
    if (n <= 1) return n;
    
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacci(10)); 

// • Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.