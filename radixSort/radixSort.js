/**
 * Returns the digit at a given index in a given number.
 * @param num {int} number to get the digit from
 * @param i {int} index from which the digit should be returned
 * @returns {int} the digit at the given index
 */
const getInt = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

/**
 * Calculates the number of digits in a given number.
 * @param num {int} number to get the number of digits from
 * @returns {int} number of digits
 */
const intCount = (num) => {
    // Return 1 if the number is 0
    if (num === 0) {
        return 1;
    }
    
    // Calculate and return the the number of digits
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

/**
 * Finds the longest number in an array.
 * @param nums {array} array of numbers
 * @returns {int} the amount of digits in the longest number
 */
const getLongest = (nums) => {
    // Initially set the first element to be the longest
    let longest = nums[0];
    
    // Loop through all elements and find the longest
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > longest) {
            longest = nums[i];
        }
    }
    
    // Return the number of digits in the longest number
    return intCount(longest);
};

/**
 * Sorts numbers without comparing them to each other by
 * distributing them into buckets corresponding to their
 * radix and putting them back together in correct order.
 * This is repeated as many times as the amount of digits
 * in the longest number.
 * @param numbers {array} array of numbers
 * @returns {array} sorted numbers
 */
const radixSort = (numbers) => {
    // Get the longest number in the array
    const longest = getLongest(numbers);
    
    // Loop as many times as the amount of digits
    // in the longest number.
    for (let i = 0; i < longest; i++) {
        // Create empty bucket for each number
        const etalons = [[], [], [], [], [], [], [], [], [], []];
        
        // Loop through all numbers and get the digit
        // of the current number at the given index.
        // Push the number into its corresponding bucket.
        for (let j = 0; j < numbers.length; j++) {
            const int = getInt(numbers[j], i);
            etalons[int].push(numbers[j]);
        }
        
        // Sort the numbers by merging the buckets into one array
        numbers = [].concat(...etalons);
    }
    
    // Return sorted array of numbers
    return numbers;
};
