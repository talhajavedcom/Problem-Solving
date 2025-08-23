// Flatten a nested array
// Convert a nested array into a single-level array

// Sample test cases:
// [1, [2, 3], [4, [5, 6]]] -> [1, 2, 3, 4, 5, 6]
// [[1, 2], [3, 4], [5, 6]] -> [1, 2, 3, 4, 5, 6]
// [1, 2, 3] -> [1, 2, 3] (already flat)
// [] -> []
// [[1], [2], [3]] -> [1, 2, 3]
// [1, [2, [3, [4]]]] -> [1, 2, 3, 4] (deep nesting)

// TODO: Implement function to flatten array
// Hint: You can use flat(), recursion, or for loop with Array.isArray()

// Your function should handle:
// - Arrays with numbers
// - Arrays with strings
// - Arrays with mixed types
// - Empty arrays
// - Single-level arrays
// - Deeply nested arrays
// - Arrays with objects

// Note: Consider whether to flatten only one level or all levels
