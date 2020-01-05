package main

import "testing"

func BenchmarkSelectionSort(b *testing.B) {
	for i := 0; i < b.N; i++ {
		slice := []int{20, 15, 400, 1, -20, 70, 80}
		SelectionSort(slice)
	}
}
