/**
 * Sets a pivot at the first index of the subset. Then starts
 * moving smaller elements to the left and larger elements
 * to the right of the pivot until the end of the subset is
 * reached. It then returns the position of the pivot.
 * @param array {array} array of numbers
 * @param left {int} starting point of the subset
 * @param right {int} end point of the subset
 * @returns {int} index of the pivot
 */
const getPivotIndex = (array, left, right) => {
    // Set pivot to the first element
    const pivot = array[left];
    
    // Set the swap index to the first element
    let swapIndex = left;
    
    // Loop through the subset beginning the second
    // index of the subset. Compare the current
    // element with the pivot. If the element is
    // smaller than the pivot, increment the swap
    // index and swap the element with the element
    // at the swap index.
    for (let i = left + 1; i <= right; i++) {
        if (array[i] < pivot) {
            swapIndex++;
            [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
        }
    }
    
    // Move the pivot to its correct position
    [array[left], array[swapIndex]] = [array[swapIndex], array[left]];
    
    // Return the swap index
    return swapIndex;
};

/**
 * Sorts elements in an array by recursively sorting a subset
 * of the array. It sets a pivot at the first index
 * of the subset and then starts comparing elements with that
 * pivot and moves them to the right side if they are larger
 * or to the left side if they are smaller than the pivot.
 * @param array {array} array of numbers
 * @param left {int} starting point of the subset
 * @param right {int} end point of the subset
 */
const quickSort = (array, left = 0, right = array.length - 1) => {
    // Return if the left pointer is larger that the right one
    if (left > right || array.length <= 1) {
        return array;
    }
    
    // Get the pivot index
    const pivotIndex = getPivotIndex(array, left, right);
    
    // Sort the left side of the pivot
    quickSort(array, left, pivotIndex - 1);
    
    // Sort the right side of the pivot
    quickSort(array, pivotIndex + 1, right);
};
