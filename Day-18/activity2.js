// Activity 2: Searching Algorithms
// • Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; 
}

console.log(linearSearch([1, 4, 2, 3, 5], 3)); // 3
console.log(linearSearch([1, 4, 2, 3, 5], 6)); // -1



// • Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; 
}

const sortedArray = [1, 2, 3, 4, 5];
console.log(binarySearch(sortedArray, 3)); 
console.log(binarySearch(sortedArray, 6)); 
