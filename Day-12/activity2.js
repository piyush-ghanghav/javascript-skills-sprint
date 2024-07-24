
// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.



try {
    console.log("Try Block without Error: Catch will Not Execute ");
    
    
} catch (error) {
    console.log("Catch Block");
    console.error("Error:",error.message);
}finally{
    console.log("Finally Block: Always Execeute");
}

console.log();



function throwError(){
    throw new Error("Random Error");
}

try {

    console.log("Try Block with Error: Statements After Error will Not Execute");
    throwError();
    console.log("After Error Not Excecute");

} catch (error) {
    console.log("Catch Block");
    console.error("Error:",error.message);
}
finally{
    console.log("Finally Block: Always Execeute");
}

