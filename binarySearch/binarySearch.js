/**
 * Searches for a given key in a sorted array using
 * binary search. It divides the array in
 * half and checks whether the given key is smaller
 * or larger than the median. It then starts all over
 * by dividing the respective side in half and checking
 * whether the key is smaller or larger than the median
 * until it has either found the key or there is no data
 * left to divide.
 * @param array {array} a sorted array of numbers
 * @param key {int} the number that should be searched
 * @returns {int} the index of the key in the array
 *          or -1 is the key is not present in the array
 */
const binarySearch = (array, key) => {
    // In case the array is empty
    if (!array.length) {
        return -1;
    }
    
    // Initially the left and right pointer are the first and last values
    let left = 0, right = array.length - 1;
    
    // Continue dividing as long as the left pointer
    // is smaller than or equal to the right pointer.
    while (left <= right) {
        // Define the median and its value
        const middle = (left + right) >>> 1;
        const value = array[middle];
        
        // Decide whether to search in the left or right
        // side of the median. If the valueis neither
        // smaller nor larger than the median, it means
        // that the median is the key it was searching for.
        if (value < key) {
            left = middle + 1;
        } else if (value > key) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    
    // Return -1 is the key was not found in the array
    return -1;
};
