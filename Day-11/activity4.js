// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(reponse=>{
    if(!reponse.ok){
        throw new Error('Network response was ok');
    }
    return reponse.json();

})
.then(data => {
    console.log("Data fetched using promise:")
    console.log(data);
})
.catch(error =>{
    console.log("Error in fetching:");
    console.log(error);
});



console.log();
console.log();
// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Data fetched usind async/await:",data);
    } catch (error) {
        console.error('There was a problem with fetch operation:',error);
    }
}
fetchData();