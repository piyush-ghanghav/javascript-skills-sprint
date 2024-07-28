// Activity 4: Recursive Search
// • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.


function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1;
    }
  
    const mid = Math.floor((start + end) / 2);
  
    if (arr[mid] === target) {
      return mid;
    }
    
    if (target < arr[mid]) {
      return binarySearch(arr, target, start, mid - 1);
    } else {
      return binarySearch(arr, target, mid + 1, end);
    }
  }
  
  console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
  console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
  


// • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target) {
    if (arr.length === 0) {
      return 0;
    }
    
    const match = arr[0] === target ? 1 : 0;
    
    return match + countOccurrences(arr.slice(1), target);
  
}


console.log(countOccurrences([1,2,3,3,4,2,4,3,4,3,2],2));
console.log(countOccurrences([1,2,3,3,4,2,4,3,4,3,2],3));
console.log(countOccurrences([1,2,3,3,4,2,4,3,4,3,2],4));
console.log(countOccurrences([1, 2, 3, 4, 5, 3, 3], 3)); // 3