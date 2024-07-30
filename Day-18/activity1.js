// Activity 1: Sorting Algorithms
// • Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 4, 2, 3, 5]));


// • Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([1, 4, 2, 3, 5]));


// • Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 4, 2, 3, 5]));

