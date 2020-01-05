/**
 * Merges two arrays into one ordered array.
 * @param arrayA {array} array of numbers
 * @param arrayB {array} array of numbers
 * @returns {array} sorted array
 */
const merge = (arrayA, arrayB) => {
    // Contains the elements of both arrays in sorted order
    const sorted = [];
    
    // Set pointers for both arrays at the first elements
    let i = 0, j = 0;
    
    // Compare elements of both arrays one by one and push
    // them into the sorted array in ascending order until
    // both pointer reached the end of the respective array.
    // Every time an element was pushed to the sorted array,
    // the corresponding pointer moves to the next index.
    while (i < arrayA.length && j < arrayB.length) {
        if (arrayA[i] < arrayB[j]) {
            sorted.push(arrayA[i]);
            i++;
        } else {
            sorted.push(arrayB[j]);
            j++;
        }
    }
    
    // Return an array with the sorted elements. Add the remaining elements
    // from arrayA and arrayB in case they contained an odd number of elements.
    return [...sorted, ...arrayA.slice(i), ...arrayB.slice(j)];
};

/**
 * Sorts an array by recursively splitting it into
 * subsets of elements until each subset only
 * contains one element. It then puts them back
 * together in ascending order.
 * @param array {array} unsorted array of numbers
 */
const mergeSort = (array) => {
    // Return the array if it can't be divided any further
    if (array.length <= 1) {
        return array;
    }
    
    // Find the index of the median
    const middle = ~~(array.length / 2);
    
    // Recursively sort the left side
    const left = mergeSort(array.slice(0, middle));
    
    // Recursively sort the right side
    const right = mergeSort(array.slice(middle));
    
    // Merge the two sides together in ascending order
    return merge(left, right);
};
