// Pad a string with `*` to length N
// Add asterisks to string to reach specified length

// Sample test cases:
// "hello", 10 -> "hello*****"
// "test", 8 -> "test****"
// "abc", 3 -> "abc" (already at length)
// "x", 5 -> "x****"
// "", 5 -> "*****"
// "long", 2 -> "lo" (truncate if longer)
// "hi", 4 -> "hi**"

// TODO: Implement function to pad string with asterisks
// Hint: You can use padEnd(), repeat(), or for loop

// Your function should handle:
// - Strings shorter than N
// - Strings equal to N
// - Strings longer than N
// - Empty strings
// - N = 0
// - N smaller than string length
// - Single characters
// - Strings with spaces

// Note: Consider whether to truncate if string is longer than N
