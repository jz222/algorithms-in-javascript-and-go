package main

import (
	"sort"
)

// BinarySearch searches for a given key in a sorted
// slice using binary search. It divides the slice in
// half and checks whether the given key is smaller
// or larger than the median. It then starts all over
// by dividing the respective side in half and checking
// whether the key is smaller or larger than the median
// until it has either found the key or there is no data
// left to divide.
func BinarySearch(slice []int, key int) int {
	size := len(slice)

	// In case the slice is empty
	if size == 0 {
		return -1
	}

	// Panic if the slice is not sorted
	if !sort.IntsAreSorted(slice) {
		panic("Given slice is not sorted")
	}

	// Initially the left and right pointer are the first and last values
	left, right := 0, size-1

	// Continue dividing as long as the left pointer
    // is smaller than or equal to the right pointer.
	for left <= right {
		// Define the median and its value
		middle := left + ((right - left) / 2)
		value := slice[middle]

		// Decide whether to search in the left or right
        // side of the median. If the value is neither
        // smaller nor larger than the median, it means
        // that the median is the key it was searching for.
		if value < key {
			left = middle + 1
		} else if value > key {
			right = middle - 1
		} else {
			return middle
		}
	}

	// Return -1 is the key was not found in the slice
	return -1
}
