package main

// InsertionSort sorts an slice of integers with insertion
// sort. It loops through the entire slice and puts each
// element one by one at its correct position to build
// up the sorted slice.
func InsertionSort(slice []int) []int {
	size := len(slice)

	// Return the slice if it can't to be sorted
	if size <= 1 {
		return slice
	}

	// Loop through the entire slice from the second element
	for i := 1; i < size; i++ {
		// Get the value at the current position
		value := slice[i]

		// Get the previous index
		j := i

		// Loop through all elements before the current index as long as the pointer
		// is larger than 0 and the element one position to left of the current
		// element is larger than the value. Move the elements one position
		// to the right to make space for the value that is currently being sorted.
		for j > 0 && slice[j-1] > value {
			slice[j] = slice[j-1]
			j--
		}

		// Move the value to the correct spot
		slice[j] = value
	}

	// Return the sorted slice
	return slice
}
