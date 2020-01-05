/**
 * Sorts an array of integers using selection sort. It loops
 * through the entire array and in every iteration it
 * looks for the element with the smallest value in the unsorted
 * elements and then swaps the element at the current index
 * with the element that has the smallest value.
 * @param array {array} array of integers to sort
 */
const selectionSort = (array) => {
    // Return the array if it can't to be sorted
    if (array.length <= 1) {
        return array;
    }
    
    // Loop through all the elements in the array
    // starting from index 0;
    for (let i = 0; i < array.length; i++) {
        // Store the current value as temporary minimum
        let min = i;
        
        // Iterate through all the elements that come
        // after the current value.
        for (let j = i + 1; j < array.length; j++) {
            // If an element is smaller that the current
            // minimum, overwrite the minimum.
            if (array[j] < array[min]) {
                min = j;
            }
        }
        
        // If an element is smaller than the current
        // value, swap the two elements.
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    
    // Return the sorted array
    return array;
};
