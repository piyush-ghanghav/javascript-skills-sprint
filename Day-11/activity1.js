
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const messagePromise = new Promise((resolve)=>{
    setTimeout(() => {
        
        console.log("Task 1");
        resolve("Timeout Message: After 1 sec ");
    }, 1000);
    
});

messagePromise.then((message)=>{
    console.log("Resolve");
    console.log(message);
    console.log();
})

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() .

const errorPromise = new Promise((_,reject)=>{
    setTimeout(()=>{
        console.log("Task 2");
        reject(new Error("Error message after 4 second"));
    },4000);
});

errorPromise.catch((error)=>{
    console.log("Reject");
    console.log(error);
    console.log();
})




// Practice Example:

function processData(isValid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log();
            if(isValid){
                console.log("Demo Combine Resolve Example:");
                resolve("Data processed Successfully!");
            }
            else{
                console.log("Demo Combine Reject Example:");
                reject(new Error("Error in processing data!"));
            }
        },8000);
    });   
}

//Simulation

processData(true)
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error.message);
});

  processData(false)
  .then((message) => {
      console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });