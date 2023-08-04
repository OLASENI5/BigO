/**
Start with the first element (index 0) as the sorted sequence.
Iterate from index 1 to the last element (index n-1) of the array.
Let's say the current element is arr[i].
Compare arr[i] with the elements in the sorted sequence (elements from 0 to i-1) from right to left until you find the correct position for arr[i].
If the current element (arr[i]) is smaller than the element being compared (arr[j]), move the compared element (arr[j]) one position to the right to make space for arr[i].
Repeat step 4 until you find the correct position for arr[i].
Insert arr[i] into the correct position in the sorted sequence.
Repeat steps 2 to 6 until all elements in the array are sorted.
 */

// CODE IN JAVASCRIPT
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }

    arr[j + 1] = key;
    }

    return arr;
}

  // Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
