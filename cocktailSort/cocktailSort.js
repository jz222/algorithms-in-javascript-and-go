/**
 * Cocktail sort is similar to bubble sort but more efficient
 * as it avoids turtles that slowly bubble to the beginning
 * of the array. It's not just focused on moving larger
 * numbers to the end of the array but also a actively moving
 * smaller numbers to the beginning of the array.
 * @param array {array} unsorted array of integers
 * @returns {array} sorted array
 */
const cocktailSort = (array) => {
    // Return the array if it can't to be sorted
    if (array.length <= 1) {
        return array;
    }
    
    // Indicates if a swap took place
    let swaps = true;
    
    // Keep sorting until no swaps took place in an iteration
    while (swaps) {
        swaps = false;
        
        // Loop through the array from the beginning
        // to the end and compare the current position
        // with the next position and swap both
        // elements if the next element is smaller.
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swaps = true;
            }
        }
        
        // If no swaps took place, the array is sorted
        if (!swaps) {
            break;
        }
        
        // Loop through the array beginning from the last
        // element and compare it to the previous element.
        // If the current element is smaller than the previous
        // one, swap both elements.
        for (let j = array.length - 1; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
        }
    }
    
    // Return the sorted array
    return array;
};
