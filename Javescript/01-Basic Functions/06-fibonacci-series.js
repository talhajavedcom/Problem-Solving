// Generate the Fibonacci series up to n
// Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Each number is the sum of the two preceding ones
// F(n) = F(n-1) + F(n-2), where F(0) = 0 and F(1) = 1

// Sample test cases:
// n = 5 -> [0, 1, 1, 2, 3]
// n = 8 -> [0, 1, 1, 2, 3, 5, 8, 13]
// n = 0 -> []
// n = 1 -> [0]
// n = 2 -> [0, 1]
// n = 10 -> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// TODO: Implement Fibonacci series generator
// Hint: You can use iteration (for loop) or recursion

// Your function should handle:
// - Positive integers
// - Zero (return empty array)
// - One (return [0])
// - Large numbers (consider performance)

// Note: For large n, consider using BigInt to avoid precision issues
// Fibonacci numbers grow exponentially
