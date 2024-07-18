// Day 6: Arrays
// Tasks/Activities:


// Activity 1 : Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console
console.log("Array 1-5: ");
let arr = [1,2,3,4,5];
console.log(arr);

// • Task 2: Access the first and last elements of the array and log them to the console.

console.log("First element: "+arr[0]);
console.log("Last element: "+arr[arr.length-1]);

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

arr.push(6);
console.log("Push method: added 6 at end ");
console.log(arr);


// • Task 4: Use the pop method to remove the last element from the array and log the updated array.

arr.pop();
console.log("Pop method: Remove last ");
console.log(arr);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.

arr.shift();
console.log("Shift Method: Remove First ");
console.log(arr);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(10);
console.log("Unshift Method: Add First ");
console.log(arr);

// Activity 3: Array Methods (Intermediate)

// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const doubledArray = arr.map(num=>num*2);
console.log("Map method: Doubled array");
console.log(doubledArray);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
console.log("Original Array:");
let arr1 = [1,2,3,4,5,6];
console.log(arr1);
console.log("Filter method: even array");
const evenArray = arr1.filter(num=>num%2==0)
console.log(evenArray);




// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
console.log("Reduce method: Sum of Array");
const sum = arr1.reduce((accumulator,item)=> accumulator += item);
console.log(sum);


// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Array Iteration using FOR loop: ");

for(let i =0 ; i<arr1.length; i++){
    console.log(arr1[i]);
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Array Iteration using forEach method loop: ");

arr1.forEach(num => console.log(num));

// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.


console.log("Two-dimensional array (matrix): ");
const mat = [[1,2,3],[4,5,6],[7,8,9]];
console.log(mat);
// • Task 13: Access and log a specific element from the two-dimensional array.
console.log("Accessing 1st subarray: ");
console.log(mat[0]);
console.log("Accessing 1st element of subarray: ");
console.log(mat[0][0]);
console.log("Accessing 2st element of subarray: ");
console.log(mat[0][1]);

