
// Activity 3: Using Async/Await

// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
    function fetchMessage(){
        return new Promise((resolve)=>{
             setTimeout(()=>{
                resolve("Message resolved after 1 sec.");
        },1000);
        });
    }

    async function getMessage(){
        try {
            const message = await fetchMessage();
            console.log(message);
        } catch (error) {
            console.error("Error occured:",error);
        }

    }

    getMessage();
// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

function fetchError(){
    return new Promise((_,reject)=>{
        setTimeout(()=>{
            reject(new Error("Error occured after 2 Sec."))
        },3000);
    });
}

async function getError(){
    try {
        const result = await fetchError();
        console.log(result);
    } catch (error) {
        console.log("Caught Error: ",error.message)
    }
}

getError();