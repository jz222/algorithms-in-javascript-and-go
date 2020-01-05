package main

// SelectionSort sorts an slice of integers using selection sort.
// It loops through the entire slice and in every iteration it
// looks for the element with the smallest value in the unsorted
// elements and then swaps the element at the current index
// with the element that has the smallest value.
func SelectionSort(slice []int) []int {
	size := len(slice)

	// Return the slice if it can't to be sorted
	if size < 2 {
		return slice
	}

	// Loop through all the elements in the slice
	// starting from index 0;
	for i := 0; i < size; i++ {
		// Store the current value as temporary minimum
		min := i

		// Iterate through all the elements that come
		// after the current value.
		for j := i + 1; j < size; j++ {
			// If an element is smaller that the current
			// minimum, overwrite the minimum.
			if slice[j] < slice[min] {
				min = j
			}
		}

		// If an element is smaller than the current
		// value, swap the two elements.
		if min != i {
			slice[i], slice[min] = slice[min], slice[i]
		}
	}

	// Return the sorted slice
	return slice
}
