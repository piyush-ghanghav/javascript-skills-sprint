// Activity 5: Concurrent Promises
const promise1 = new Promise((resolve)=>setTimeout(()=>resolve('First'),1000));
const promise2 = new Promise((resolve)=>setTimeout(()=>resolve('Second'),2000));
const promise3 = new Promise((resolve)=>setTimeout(()=>resolve('Third'),3000));

Promise.all([promise1,promise2,promise3])
.then((value)=>{
    console.log();
    console.log("Task1 :");
    console.log(value);
})
.catch((error)=>{
    console.log("Error:",error);
});
// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([promise1,promise2,promise3])
.then((value)=>{
    console.log("Task 2:")
    console.log(value);
})
.catch((error)=>{
    console.log("Error:",error);
});