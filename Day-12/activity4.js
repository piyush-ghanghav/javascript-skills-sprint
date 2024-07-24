// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use . catch() to handle the rejection and log an appropriate message to the console.

function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resolve('Promise Resolved');
            } else {
                reject(new Error('Promise Rejected'));
            }
        }, 500); 
    });
}

randomPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(`Error: ${error.message}`);
    });


// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandomPromise() {
    try {
        console.log("Async");
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
handleRandomPromise();