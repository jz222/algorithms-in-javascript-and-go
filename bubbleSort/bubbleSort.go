package main

// BubbleSort takes a slice of integers and sorts them
// with the bubble sort algorithm.
func BubbleSort(slice []int) []int {
	length := len(slice)

	// Return the slice if it can't to be sorted
	if length < 2 {
		return slice
	}

	// Indicates if a swap took place
	swaps := true

	// Loop through the slice from the end
	for i := length; i > 0; i-- {
		// Initially set swapped to false
		swaps = false

		// Iterate through all elements in the slice up to the element
		// that is located at one position before the index.
		for j := 0; j < i-1; j++ {
			// Compare the current element with the next
            // element and swap the elements if it is
            // larger and set swapped to true to indicate
            // that the slice isn't sorted, yet.
			if slice[j] > slice[j+1] {
				slice[j], slice[j+1] = slice[j+1], slice[j]
				swaps = true
			}
		}

		// If no swaps took place, the slice is sorted
		if !swaps {
			break
		}
	}

	// Return the sorted slice
	return slice
}
