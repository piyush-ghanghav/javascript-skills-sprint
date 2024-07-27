// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. 
// Use a closure to ensure each function logs the correct index.


function createArrayOfFunction() {
    let functions = [];

    for (let i = 0; i < 10; i++) {

        functions.push((function (index) {
            return function () {
                console.log(index);
            }
        })(i));

    }
    return functions;
}

const functionArray = createArrayOfFunction();

functionArray[0]();
functionArray[1]();
functionArray[2]();


