package main

// CocktailSort is similar to BubbleSort but more efficient
// as it avoids turtles that slowly bubble to the beginning
// of the slice. It's not just focused on moving larger
// numbers to the end of the slice but also a actively moving
// smaller numbers to the beginning of the slice.
func CocktailSort(slice []int) []int {
	size := len(slice)

	// Indicates if a swap took place
	swaps := true

	// Keep sorting until no swaps took place in an iteration
	for {
		swaps = false

		// Loop through the slice from the beginning
		// to the end and compare the current position
		// with the next position and swap both
		// elements if the next element is smaller.
		for i := 0; i < size-1; i++ {
			if slice[i] > slice[i+1] {
				slice[i], slice[i+1] = slice[i+1], slice[i]
				swaps = true
			}
		}

		// If no swaps took place, the slice is sorted
		if !swaps {
			break
		}

		// Loop through the slice beginning from the last
		// element and compare it to the previous element.
		// If the current element is smaller than the previous
		// one, swap both elements.
		for j := size - 1; j > 0; j-- {
			if slice[j] < slice[j-1] {
				slice[j], slice[j-1] = slice[j-1], slice[j]
			}
		}
	}

	// Return the sorted slice
	return slice
}
