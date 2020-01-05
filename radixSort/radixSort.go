package main

import (
	"math"
)

// Returns the digit at a given index in a given number.
func getInt(num, i int) int {
	return int(math.Abs(float64(num))/math.Pow(10, float64(i))) % 10
}

// Calculates the number of digits in a given number.
func intCount(num int) int {
	// Return 1 if the number is 0
	if num == 0 {
		return 1
	}

	// Calculate and return the the number of digits
	return int(math.Log10(math.Abs(float64(num)))) + 1
}

// Finds the longest number in an slice.
func getLongest(nums []int) int {
	// Initially set the first element to be the longest
	largest := nums[0]

	// Loop through all elements and find the longest
	for i := 1; i < len(nums); i++ {
		if nums[i] > largest {
			largest = nums[i]
		}
	}

	// Return the number of digits in the longest number
	return intCount(largest)
}

// RadixSort sorts numbers without comparing them to each
// other by distributing them into buckets corresponding
// to their radix and putting them back together in
// correct order. This is repeated as many times
// as the amount of digits in the longest number.
func RadixSort(numbers []int) []int {
	// Get the longest number in the slice
	longest := getLongest(numbers)

	// Loop as many times as the amount of digits
	// in the longest number.
	for i := 0; i < longest; i++ {
		// Create empty bucket for each number
		etalons := make([][]int, 10)

		// Loop through all numbers and get the digit
		// of the current number at the given index.
		// Push the number into its corresponding bucket.
		for j := 0; j < len(numbers); j++ {
			inte := getInt(numbers[j], i)
			etalons[inte] = append(etalons[inte], numbers[j])
		}

		// Sort the numbers by merging the buckets into one slice
		var res []int
		for _, b := range etalons {
			res = append(res, b...)
		}
		numbers = res
	}

	// Return sorted slice of numbers
	return numbers
}
