package main

import "testing"

func BenchmarkQuickSort(b *testing.B) {
	for i := 0; i < b.N; i++ {
		slice := []int{10, 4, 2, 8, 0, 9, 17, 21}
		QuickSort(slice)
	}
}
