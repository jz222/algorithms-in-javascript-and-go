package main

import (
	"sort"
)

// Sets a pivot at the first index of the subset. Then starts
// moving smaller elements to the left and larger elements
// to the right of the pivot until the end of the subset is
// reached. It then returns the position of the pivot.
func getPivotIndex(slice []int, left, right int) int {
	// Set pivot to the first element
	pivot := slice[left]

	// Set the swap index to the first element
	swapIndex := left

	// Loop through the subset beginning the second
	// index of the subset. Compare the current
	// element with the pivot. If the element is
	// smaller than the pivot, increment the swap
	// index and swap the element with the element
	// at the swap index.
	for i := left + 1; i <= right; i++ {
		if slice[i] < pivot {
			swapIndex++
			slice[swapIndex], slice[i] = slice[i], slice[swapIndex]
		}
	}

	// Move the pivot to its correct position
	slice[left], slice[swapIndex] = slice[swapIndex], slice[left]

	// Return the swap index
	return swapIndex
}

// Sorts elements in an slice by recursively sorting a subset
// of the slice. It sets a pivot at the first index
// of the subset and then starts comparing elements with that
// pivot and moves them to the right side if they are larger
// or to the left side if they are smaller than the pivot.
func quickSort(slice []int, left, right int) {
	// Sort if the left pointer is smaller that the right one
	if left < right {
		// Get the pivot index
		pivotIndex := getPivotIndex(slice, left, right)

		// Sort the left side of the pivot
		quickSort(slice, left, pivotIndex-1)

		// Sort the right side of the pivot
		quickSort(slice, pivotIndex+1, right)
	}
}

// QuickSort sorts an slice with the quick sort algorithm
func QuickSort(slice []int) {
	size := len(slice)

	// Return is the slice is can't be sorted
	if size <= 1 || sort.IntsAreSorted(slice) {
		return
	}

	quickSort(slice, 0, size-1)
}
