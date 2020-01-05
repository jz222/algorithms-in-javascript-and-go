/**
 * Fastest option. The outer loop points to the last index of the array and decreases
 * by one index in every iteration, while the inner loop always starts at the first
 * index and increases by one index in every iteration until it reaches the index
 * right before the outer index to ensure that the already sorted elements don't get
 * compared twice.
 */
const efficientBubbleSort = (array) => {
    // Return the array if it can't to be sorted
    if (array.length <= 1) {
        return array;
    }
    
    // Indicates if a swap took place.
    let swaps = true;
    
    // Point to the last index in the array and decrease by 1 in every iteration.
    // As the last elements are already sorted, they don't need to be compared in
    // every iteration and can be skipped.
    for (let i = array.length; i > 0; i--) {
        swaps = false;
        
        // Loop through all the unsorted elements until j points to the index,
        // which comes right before the first element that is already sorted.
        for (let j = 0; j < i; j++) {
            
            // Compare the element with the next element
            if (array[j] > array[j + 1]) {
                // If the next element is larger, swap the elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                // Set swap to true to indicate that a the element isn't completely sorted, yet
                swaps = true;
            }
            
        }
        
        // If no swaps took place, the array is sorted and further iterations can be omitted.
        if (!swaps) {
            break;
        }
    }
    
    return array;
};


/**
 * Slower option. It loops through all the elements in the array
 * until an iteration without swaps takes place. It is slower
 * because it also compares already sorted elements.
 */
const slowerBubbleSort = (array) => {
    // Return the array if it can't to be sorted
    if (array.length < 2) {
        return array;
    }
    
    // Indicates if a swap took place
    let swapped = false;
    
    // The first iteration doesn't require a check,
    // as it will always pass, hence the do while.
    do {
        // Initially set swapped to false
        swapped = false;
        
        // Iterate through all elements in the array
        for (let i = 0; i < array.length; i++) {
            
            // Compare the current element with the next
            // element and swap the elements if it is
            // larger and set swapped to true to indicate
            // that the array isn't sorted, yet.
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
            
        }
    } while (swapped);
    
    // Return the sorted array
    return array;
};
