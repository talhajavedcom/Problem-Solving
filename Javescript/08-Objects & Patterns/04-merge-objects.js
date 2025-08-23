// Merge two objects
// Combine properties from two objects into one

// Sample test cases:
// {a: 1}, {b: 2} -> {a: 1, b: 2}
// {a: 1}, {a: 2} -> {a: 2} (second overwrites first)
// {a: {x: 1}}, {a: {y: 2}} -> {a: {y: 2}} (shallow merge)
// {}, {a: 1} -> {a: 1}
// {a: 1}, {} -> {a: 1}

// TODO: Implement function to merge objects
// Hint: You can use Object.assign(), spread operator, or for...in loop

// Your function should handle:
// - Regular objects
// - Empty objects
// - Overlapping properties
// - Nested objects
// - Multiple objects
// - Null/undefined values

// Note: Later properties overwrite earlier ones
