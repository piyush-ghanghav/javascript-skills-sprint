// Activity 4: Array Algorithms
// • Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
    k = k % arr.length; 
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); 
console.log(rotateArray([1, 2, 3, 4, 5], 7)); 



// • Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 
