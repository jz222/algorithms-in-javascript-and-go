package main

import "testing"

func BenchmarkMergeSort(b *testing.B) {
	for i := 0; i < b.N; i++ {
		slice := []int{2, 10, -5, -2, 0, 100, 81}
		MergeSort(slice)
	}
}
