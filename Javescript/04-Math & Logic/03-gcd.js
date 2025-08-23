// Calculate GCD of two numbers
// Greatest Common Divisor - largest number that divides both numbers

// Sample test cases:
// 48, 18 -> 6
// 12, 8 -> 4
// 7, 13 -> 1 (coprime)
// 0, 5 -> 5
// 5, 0 -> 5
// 0, 0 -> 0
// 15, 25 -> 5

// TODO: Implement function to calculate GCD
// Hint: You can use Euclidean algorithm or prime factorization

// Your function should handle:
// - Positive integers
// - Zero values
// - Coprime numbers (GCD = 1)
// - Same numbers (GCD = number)
// - Large numbers

// Note: Euclidean algorithm is efficient:
// GCD(a, b) = GCD(b, a % b) until b becomes 0
