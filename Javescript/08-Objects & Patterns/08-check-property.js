// Check if a property exists in an object
// Return true if property exists, false otherwise

// Sample test cases:
// {name: "John"}, "name" -> true
// {name: "John"}, "age" -> false
// {name: "John"}, "toString" -> false (inherited)
// {}, "any" -> false
// null, "prop" -> false

// TODO: Implement function to check property existence
// Hint: You can use hasOwnProperty(), in operator, or Object.hasOwn()

// Your function should handle:
// - Regular objects
// - Empty objects
// - Own properties
// - Inherited properties
// - Null values
// - Undefined values
// - Symbol properties

// Note: Consider whether to check own properties only or inherited too
