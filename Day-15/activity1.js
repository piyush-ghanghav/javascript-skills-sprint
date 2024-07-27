// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope.
//  Call the inner function and log the result.

function outerFuncton(){
    outerVar = "This is outer function";

    function innnerFunction(){
        return outerVar;
    }
    return innnerFunction;
}

const myInnerFunction = outerFuncton();
console.log(myInnerFunction());
console.clear();


// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

// Closure : Function in js where innner function has acces to variables from the outer functions scope


function createCounter(){
    let count = 0;

    return{
        increament(){
            count++;
        },
        getValue(){
            return count;
        }
    };
};

const counter = createCounter();
counter.increament();                       // 1
counter.increament();                       // 2
console.log(counter.getValue());
counter.increament();       // 3
counter.increament();       // 4
counter.increament();       // 5
counter.increament();       // 6
counter.increament();       // 7
console.log(counter.getValue());

