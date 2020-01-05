package main

import "testing"

func BenchmarkInsertionSort(b *testing.B) {
	for i := 0; i < b.N; i++ {
		slice := []int{100, 2, 20, -4, 0, 9000, 17}
		InsertionSort(slice)
	}
}
