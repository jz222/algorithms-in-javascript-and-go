package main

import (
	"math"
)

// Merges two slices into one ordered slice.
func merge(sliceA, sliceB []int) []int {
	// Contains the elements of both slices in sorted order
	sorted := []int{}

	// Set pointer for both slices at the first elements
	i, j := 0, 0

	// Compare elements of both slices one by one and push
	// them into the sorted slice in ascending order until
	// both pointer reached the end of the respective slice.
	// Every time an element was pushed to the sorted slice,
	// the corresponding pointer moves to the next index.
	for i < len(sliceA) && j < len(sliceB) {
		if sliceA[i] < sliceB[j] {
			sorted = append(sorted, sliceA[i])
			i++
		} else {
			sorted = append(sorted, sliceB[j])
			j++
		}
	}

	// Add the remaining elements from sliceA and sliceB
	// in case they contained an odd number of elements.
	sorted = append(sorted, sliceA[i:]...)
	sorted = append(sorted, sliceB[j:]...)

	// Return a slice with the sorted elements
	return sorted
}

// MergeSort sorts a slice by recursively splitting it
// into subsets of elements until each subset only
// contains one element. It then puts them back
// together in ascending order.
func MergeSort(slice []int) []int {
	size := len(slice)

	// Return the slice if it can't be divided any further
	if size <= 1 {
		return slice
	}

	// Find the index of the median
	middle := int(math.Floor(float64(size) / 2))

	// Recursively sort the left side
	left := MergeSort(slice[0:middle])

	// Recursively sort the right side
	right := MergeSort(slice[middle:])

	// Merge the two sides together in ascending order
	return merge(left, right)
}
