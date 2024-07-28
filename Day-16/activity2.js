
// Activity 2: Recursion with Arrays
// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr){
    if(arr.length === 0){
        return 0;
    }

    return arr[0] + sumArray(arr.slice(1));

}

console.log("Array Sum: ",sumArray([1,2,3,4,5]));



// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArray(arr){
    if(arr.length === 1){
        return arr[0];
    }
    
    restMax = maxArray(arr.slice(1));

    return arr[0] > restMax ? arr[0] : restMax;

}

console.log("Max Element of array: ",maxArray([1,2,3,4,5]));
console.log("Max Element of array: ",maxArray([1,2,3,44,5]));
console.log("Max Element of array: ",maxArray([1,25,-3,4,5]));
