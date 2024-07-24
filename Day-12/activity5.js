// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using . catch() . Log an appropriate error message to the console.


fetch('https://invalid-url.example')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(`Fetch error: ${error.message}`);
    });


// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.example');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);  // IF FAILED -> fetch failed
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Fetch error: ${error.message}`);
    }
}

fetchData();
