/**
 * Sorts an array of integers with insertion sort.
 * It loops through the entire array and puts each
 * element one by one at its correct position to
 * build up the sorted array.
 * @param array {array} array of integers to sort
 * @returns {array} sorted array
 */
const insertionSort = (array) => {
    // Return the array if it can't to be sorted
    if (array.length <= 1) {
        return array;
    }
    
    // Loop through the entire array from the second element
    for (let i = 1; i < array.length; i++) {
        // Get the value at the current position
        const value = array[i];
        
        // Get the previous index
        let j = i - 1;
        
        // Loop through all elements before the current index as long as the pointer
        // is larger than 0 or 0 and the current element is larger than the value.
        // Move the elements one position to the right to make space for the value
        // that is currently being sorted.
        for (j; j >= 0 && array[j] > value; j--) {
            array[j + 1] = array[j];
        }
        
        // Move the value to the correct spot
        array[j + 1] = value;
    }
    
    // Returns the sorted array
    return array;
};
