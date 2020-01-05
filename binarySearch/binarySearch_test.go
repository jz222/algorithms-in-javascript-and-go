package main

import "testing"

func BenchmarkBinarySearch(b *testing.B) {
	slice := []int{0, 2, 5, 7, 8, 9, 10}

	for i := 0; i < b.N; i++ {
		BinarySearch(slice, 2)
	}
}
