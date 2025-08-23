// Check if a number is prime
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself

// Sample test cases:
// 2 -> true (prime)
// 3 -> true (prime)
// 4 -> false (not prime, divisible by 2)
// 5 -> true (prime)
// 6 -> false (not prime, divisible by 2 and 3)
// 7 -> true (prime)
// 1 -> false (not prime by definition)
// 0 -> false (not prime)
// -5 -> false (negative numbers are not prime)

// TODO: Implement prime number checking function
// Hint: You can use a loop to check divisibility from 2 to square root of the number

// Your function should handle:
// - Positive integers greater than 1
// - Numbers 0 and 1 (not prime)
// - Negative numbers (not prime)
// - Large numbers (consider performance)
// - Even numbers (except 2, all even numbers > 2 are not prime)

// Note: For performance, you only need to check up to the square root of the number
// If a number is not divisible by any number up to its square root, it's prime
