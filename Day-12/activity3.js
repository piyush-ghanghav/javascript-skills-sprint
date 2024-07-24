
// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. 
//           Throw an instance of this custom error in a function and handle it using a try-catch block.


class CustomError extends Error{

    constructor(message){
        super(message);
        this.name = "CustomError"
    }
}

function errorFunction(){
    throw new CustomError('This is Custom Error');
}


try {
    errorFunction();

} catch (error) {
    
    if(error instanceof CustomError){
        console.log(`Caught Custom Error: ${error.message}`);
    }
    else{
        console.log(`Caught Unknown Error: ${error.message}`);

    }
}


// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. 
//           Handle the custom error using a try-catch block.


class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input){

    if(typeof input !== 'string' || input.trim() === ''){
        throw new ValidationError("Input must be a non empty string.");
    }
    return 'Valid Input';

    }

function handleUserInput(input){
    
    try {
        const result = validateInput(input);
        console.log(result);
    } catch (error) {
        
        if(error instanceof ValidationError){
            console.log(`Validation Error: ${error.message}`);
        }else{

            console.log(`Unknown Error: ${error.message}`);
        }
    }
}

handleUserInput(' ');
handleUserInput('   ');
handleUserInput(12212);
handleUserInput('Hello');