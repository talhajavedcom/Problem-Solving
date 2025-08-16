# 📚 JavaScript Assignments – Practice Tracker (Complete)
Import into **Notion** or view on **GitHub**. Each task includes sample input and expected output.
---
## 📌 Basic Functions
- [ ] **1. Find maximum of two numbers**
   ```js
maxOfTwo(10, 25) // → 25
   ```

- [ ] **2. Find maximum of three numbers**
   ```js
maxOfThree(10, 25, 7) // → 25
   ```

- [ ] **3. Check whether a number is even or odd**
   ```js
isEven(7) // → false
isEven(12) // → true
   ```

- [ ] **4. Return the factorial of a number**
   ```js
factorial(5) // → 120
factorial(0) // → 1
   ```

- [ ] **5. Generate the Fibonacci series up to n**
   ```js
fibonacci(7) // → [0,1,1,2,3,5,8]
   ```

- [ ] **6. Reverse a number**
   ```js
reverseNumber(12345) // → 54321
   ```

- [ ] **7. Check if a number is prime**
   ```js
isPrime(7) // → true
isPrime(10) // → false
   ```

- [ ] **8. Compute power without ****
   ```js
power(2, 5) // → 32
   ```

- [ ] **9. Check leap year**
   ```js
isLeapYear(2000) // → true
isLeapYear(1900) // → false
isLeapYear(2024) // → true
   ```

- [ ] **10. Swap numbers (3 ↔ 5 without if/else)**
   ```js
swapNumber(3) // → 5
swapNumber(5) // → 3
   ```

---
## 📌 Array – Core
- [ ] **11. Largest number in an array**
   ```js
largest([10, 5, 20, 8, 15]) // → 20
   ```

- [ ] **12. Smallest number in an array**
   ```js
smallest([10, 5, 20, 8, 15]) // → 5
   ```

- [ ] **13. Sum of array elements**
   ```js
sumArray([1,2,3,4,5]) // → 15
   ```

- [ ] **14. Average of array elements**
   ```js
averageArray([1,2,3,4,5]) // → 3
   ```

- [ ] **15. Count occurrences of a value**
   ```js
countOccurrences([1,2,2,3,2,4,5], 2) // → 3
   ```

- [ ] **16. Filter even numbers**
   ```js
evens([1,2,3,4,5,6]) // → [2,4,6]
   ```

- [ ] **17. Filter odd numbers**
   ```js
odds([1,2,3,4,5,6]) // → [1,3,5]
   ```

- [ ] **18. Separate odd and even into arrays**
   ```js
separateOddEven([1,2,3,4,5,6]) // → {odd:[1,3,5], even:[2,4,6]}
   ```

- [ ] **19. Remove duplicates**
   ```js
unique([1,2,2,3,4,4,5]) // → [1,2,3,4,5]
   ```

- [ ] **20. Find duplicates**
   ```js
duplicates([1,2,2,3,4,4,5,5]) // → [2,4,5]
   ```

---
## 📌 Array – Intermediate
- [ ] **21. Second largest element**
   ```js
secondLargest([3,9,1,7,9,5]) // → 7
   ```

- [ ] **22. Second smallest element**
   ```js
secondSmallest([3,9,1,7,9,5]) // → 3
   ```

- [ ] **23. Sort ascending (bubble sort)**
   ```js
bubbleSort([5,3,8,4,2]) // → [2,3,4,5,8]
   ```

- [ ] **24. Sort descending (selection sort)**
   ```js
selectionSortDesc([5,3,8,4,2]) // → [8,5,4,3,2]
   ```

- [ ] **25. Insertion sort**
   ```js
insertionSort([9,1,5,3]) // → [1,3,5,9]
   ```

- [ ] **26. Merge sort**
   ```js
mergeSort([8,3,2,9,7]) // → [2,3,7,8,9]
   ```

- [ ] **27. Quick sort**
   ```js
quickSort([4,2,7,3,1,6]) // → [1,2,3,4,6,7]
   ```

- [ ] **28. Heap sort**
   ```js
heapSort([4,10,3,5,1]) // → [1,3,4,5,10]
   ```

- [ ] **29. Binary search (sorted array)**
   ```js
binarySearch([1,3,5,7,9,11], 7) // → 3
   ```

- [ ] **30. Linear search**
   ```js
linearSearch([9,8,7,6], 7) // → 2
   ```

---
## 📌 Array – Advanced
- [ ] **31. Flatten a nested array (one level)**
   ```js
flatten([1,[2,3],[4,5]]) // → [1,2,3,4,5]
   ```

- [ ] **32. Flatten deeply nested array**
   ```js
flattenDeep([1,[2,[3,[4]]]]) // → [1,2,3,4]
   ```

- [ ] **33. Chunk array**
   ```js
chunk([1,2,3,4,5], 2) // → [[1,2],[3,4],[5]]
   ```

- [ ] **34. Intersection of arrays**
   ```js
intersect([1,2,3,4],[3,4,5]) // → [3,4]
   ```

- [ ] **35. Union of arrays**
   ```js
union([1,2,2,3],[3,4]) // → [1,2,3,4]
   ```

- [ ] **36. Difference of arrays**
   ```js
difference([1,2,3,4],[3,4]) // → [1,2]
   ```

- [ ] **37. Move zeroes to end**
   ```js
moveZeroes([0,1,0,3,12]) // → [1,3,12,0,0]
   ```

- [ ] **38. Largest sum of contiguous subarray (Kadane)**
   ```js
maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) // → 6
   ```

- [ ] **39. Pair with given sum**
   ```js
pairWithSum([1,4,45,6,10,8], 16) // → [6,10]
   ```

- [ ] **40. Two elements whose sum is closest to zero**
   ```js
closestToZero([-1, 2, -3, 4, -2]) // → (-1,1) or similar
   ```

---
## 📌 Array – Frequency & Majority
- [ ] **41. Count frequency of each element**
   ```js
frequency([1,2,2,3,3,3]) // → {1:1,2:2,3:3}
   ```

- [ ] **42. Majority element (Boyer–Moore)**
   ```js
majorityElement([3,3,4,2,3,3,5]) // → 3
   ```

- [ ] **43. Number occurring odd number of times**
   ```js
oddOccurrence([1,2,3,2,3,1,3]) // → 3
   ```

- [ ] **44. Find missing number (1..n)**
   ```js
missingNumber([1,2,4,5], 5) // → 3
   ```

- [ ] **45. Two repeating elements**
   ```js
twoRepeating([1,2,3,4,2,3]) // → [2,3]
   ```

---
## 📌 Strings – Core
- [ ] **46. Reverse a string**
   ```js
reverseString("Mustafa") // → "afsatsuM"
   ```

- [ ] **47. Reverse words in a sentence**
   ```js
reverseWords("hello world") // → "world hello"
   ```

- [ ] **48. Capitalize first letter of each word**
   ```js
capitalizeWords("hello world") // → "Hello World"
   ```

- [ ] **49. Palindrome string**
   ```js
isPalindrome("racecar") // → true
isPalindrome("hello") // → false
   ```

- [ ] **50. Count vowels**
   ```js
countVowels("programming") // → 3
   ```

- [ ] **51. Count consonants**
   ```js
countConsonants("programming") // → 8
   ```

- [ ] **52. Remove vowels**
   ```js
removeVowels("programming") // → "prgrmmng"
   ```

- [ ] **53. Remove spaces**
   ```js
"removeSpaces("a b  c") // → "abc"
   ```

- [ ] **54. Check digits only**
   ```js
isDigitsOnly("12345") // → true
isDigitsOnly("12a45") // → false
   ```

- [ ] **55. Extract numbers from string**
   ```js
extractNumbers("a1b23c045") // → [1,23,45]
   ```

---
## 📌 Strings – Advanced
- [ ] **56. Anagrams check**
   ```js
isAnagram("listen","silent") // → true
   ```

- [ ] **57. Longest word in a sentence**
   ```js
longestWord("I love JavaScript a lot") // → "JavaScript"
   ```

- [ ] **58. Shortest word in a sentence**
   ```js
shortestWord("I love JS") // → "I"
   ```

- [ ] **59. Count words**
   ```js
countWords("I love JavaScript") // → 3
   ```

- [ ] **60. Truncate string to N chars**
   ```js
truncate("Hello World", 5) // → "Hello..."
   ```

- [ ] **61. Repeat string N times**
   ```js
"repeatStr("*", 5) // → "*****"
   ```

- [ ] **62. Pad string to length N with ***
   ```js
padWithStar("JS", 5) // → "**JS*"
   ```

---
## 📌 Math & Conversions
- [ ] **63. Celsius to Fahrenheit**
   ```js
cToF(0) // → 32
cToF(25) // → 77
   ```

- [ ] **64. Fahrenheit to Celsius**
   ```js
fToC(32) // → 0
fToC(77) // → 25
   ```

- [ ] **65. Greatest Common Divisor (GCD)**
   ```js
gcd(48,18) // → 6
   ```

- [ ] **66. Least Common Multiple (LCM)**
   ```js
lcm(12,18) // → 36
   ```

- [ ] **67. Random integer in range**
   ```js
randInt(5, 10) // → 5..10
   ```

- [ ] **68. Sum of digits**
   ```js
sumDigits(12345) // → 15
   ```

- [ ] **69. Armstrong number check**
   ```js
isArmstrong(153) // → true
   ```

- [ ] **70. Perfect number check**
   ```js
isPerfect(28) // → true
   ```

- [ ] **71. Prime numbers in range**
   ```js
primesInRange(10, 30) // → [11,13,17,19,23,29]
   ```

- [ ] **72. Power of two check**
   ```js
isPowerOfTwo(16) // → true
isPowerOfTwo(18) // → false
   ```

---
## 📌 Data Structures – Linked List
- [ ] **73. Create singly linked list (push & traverse)**
   ```js
listFromArray([1,2,3]).toArray() // → [1,2,3]
   ```

- [ ] **74. Reverse a linked list**
   ```js
reverseList(listFromArray([1,2,3])).toArray() // → [3,2,1]
   ```

- [ ] **75. Detect cycle in linked list**
   ```js
hasCycle(cyclicList) // → true
   ```

- [ ] **76. Merge two sorted linked lists**
   ```js
mergeTwoLists([1,2,4],[1,3,4]) // → [1,1,2,3,4,4]
   ```

- [ ] **77. Remove nth node from end**
   ```js
removeNthFromEnd([1,2,3,4,5], 2) // → [1,2,3,5]
   ```

---
## 📌 Data Structures – Trees
- [ ] **78. Binary tree level order (BFS)**
   ```js
levelOrder(tree) // → [[1],[2,3],[4,5]]
   ```

- [ ] **79. Binary tree inorder (DFS)**
   ```js
inorderTraversal(tree) // → [4,2,5,1,3]
   ```

- [ ] **80. Height of a binary tree**
   ```js
treeHeight(tree) // → 3
   ```

- [ ] **81. Balanced binary tree check**
   ```js
isBalanced(tree) // → true/false
   ```

- [ ] **82. Invert binary tree**
   ```js
invertTree(tree) // → (mirrored tree)
   ```

- [ ] **83. Binary Search Tree insert & find**
   ```js
bstInsert([5,3,7], 6) → bst ; bstFind(bst, 7) // → true
   ```

- [ ] **84. Delete node in BST**
   ```js
bstDelete(bst, 3) // → (updated bst)
   ```

- [ ] **85. Lowest common ancestor (BST)**
   ```js
lowestCommonAncestor(bst, 3, 7) // → 5
   ```

- [ ] **86. Serialize/deserialize binary tree**
   ```js
deserialize(serialize(tree)) // → same structure
   ```

- [ ] **87. Path sum (root to leaf equals target)**
   ```js
hasPathSum(tree, 22) // → true/false
   ```

---
## 📌 Graphs & Advanced DS
- [ ] **88. Graph DFS**
   ```js
dfs(graph, 'A') // → ['A','B','D','C']
   ```

- [ ] **89. Graph BFS**
   ```js
bfs(graph, 'A') // → ['A','B','C','D']
   ```

- [ ] **90. Detect cycle in undirected graph**
   ```js
hasCycleUndirected(graph) // → true/false
   ```

- [ ] **91. Shortest path (unweighted) using BFS**
   ```js
shortestPathBFS(graph, 'A', 'D') // → ['A','B','D']
   ```

- [ ] **92. Dijkstra’s shortest path**
   ```js
dijkstra(weightedGraph, 'A') // → distances map
   ```

- [ ] **93. A* pathfinding (grid)**
   ```js
aStar(grid, start, goal) // → path
   ```

- [ ] **94. Topological sort (DAG)**
   ```js
topoSort(dag) // → order list
   ```

- [ ] **95. Union-Find (Disjoint Set) – connected components**
   ```js
connectedComponents(n, edges) // → count
   ```

- [ ] **96. Minimum spanning tree (Kruskal)**
   ```js
mstKruskal(weightedEdges) // → MST edges
   ```

- [ ] **97. Bellman–Ford (detect negative cycle)**
   ```js
bellmanFord(edges, N, source) // → distances / negativeCycle
   ```

---
## 📌 Objects & Patterns
- [ ] **98. Check if an object is empty**
   ```js
isEmpty({}) // → true
   ```

- [ ] **99. Shallow clone object**
   ```js
clone({a:1,b:2}) // → {a:1,b:2}
   ```

- [ ] **100. Deep clone nested object**
   ```js
deepClone({a:{b:2}}) // → {a:{b:2}}
   ```

- [ ] **101. Merge two objects**
   ```js
mergeObjects({a:1,b:2},{b:3,c:4}) // → {a:1,b:3,c:4}
   ```

- [ ] **102. Count properties of object**
   ```js
countProps({a:1,b:2,c:3}) // → 3
   ```

- [ ] **103. Get keys of object**
   ```js
getKeys({a:1,b:2}) // → ['a','b']
   ```

- [ ] **104. Get values of object**
   ```js
getValues({a:1,b:2}) // → [1,2]
   ```

- [ ] **105. Property exists check**
   ```js
hasProp({a:1}, 'a') // → true
   ```

- [ ] **106. Event Emitter**
   ```js
emitter.on('ping',fn); emitter.emit('ping',42) // → calls fn(42)
   ```

- [ ] **107. Publish–Subscribe**
   ```js
pubsub.subscribe('news', fn); pubsub.publish('news', {id:1})
   ```

---
## 📌 Functions & Utilities
- [ ] **108. Debounce function**
   ```js
const d = debounce(fn, 300); d();
   ```

- [ ] **109. Throttle function**
   ```js
const t = throttle(fn, 100); t();
   ```

- [ ] **110. Curry sum function**
   ```js
currySum(1)(2)(3)() // → 6  (or curry(add)(1)(2)(3))
   ```

- [ ] **111. Compose two functions**
   ```js
compose(x=>x+1, x=>x*2)(3) // → 7
   ```

- [ ] **112. Memoize a function**
   ```js
const mFib = memoize(fib); mFib(35) // → fast on repeats
   ```

- [ ] **113. Sleep/delay (promise)**
   ```js
await sleep(500) // → resolves after 500ms
   ```

- [ ] **114. Retry a function on failure**
   ```js
await retry(fetchOnce, 3)
   ```

- [ ] **115. Promise.race**
   ```js
await Promise.race([p1,p2]) // → first resolved/rejected
   ```

- [ ] **116. Implement Promise.all**
   ```js
promiseAll([p1,p2]) // → results array
   ```

- [ ] **117. Implement Promise.any**
   ```js
promiseAny([p1,p2]) // → first fulfilled
   ```

---
## 📌 Promises & Async
- [ ] **118. Implement Promise.allSettled**
   ```js
promiseAllSettled([p1,p2]) // → [{status:'fulfilled',value:...}, ...]
   ```

- [ ] **119. Run promises in sequence**
   ```js
inSequence([f1,f2,f3]) // → results in order
   ```

- [ ] **120. Run promises in parallel**
   ```js
inParallel([f1,f2,f3]) // → results
   ```

- [ ] **121. Concurrency limit for promises**
   ```js
withConcurrency(tasks, 2) // → processes 2 at a time
   ```

- [ ] **122. Event loop microtask vs macrotask demo**
   ```js
eventLoopDemo() // → logs order
   ```

- [ ] **123. Timeout wrapper for a promise**
   ```js
withTimeout(fetchData(), 1000) // → reject on timeout
   ```

- [ ] **124. Repeat until condition with backoff**
   ```js
repeatUntil(fn, cond, {retries:5})
   ```

- [ ] **125. Deferred promise**
   ```js
const d = deferred(); d.resolve(1) // → 1
   ```

- [ ] **126. Race and cancel helper**
   ```js
raceWithCancel([p1,p2]) // → value + cancel others
   ```

- [ ] **127. Semaphore for async tasks**
   ```js
const s = semaphore(2); await s.run(task)
   ```

---
## 📌 Parsing & Utils
- [ ] **128. Parse query string to object**
   ```js
parseQuery("?a=1&b=hello") // → {a:"1", b:"hello"}
   ```

- [ ] **129. Stringify object to query string**
   ```js
stringifyQuery({a:1,b:"hi"}) // → "a=1&b=hi"
   ```

- [ ] **130. UUID v4 generator**
   ```js
uuidv4() // → 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
   ```

- [ ] **131. Deep equality check**
   ```js
deepEqual({a:[1,2]},{a:[1,2]}) // → true
   ```

- [ ] **132. Serialize & deserialize JSON with dates**
   ```js
deserialize(serialize({d:new Date(0)}))
   ```

- [ ] **133. Flatten a deeply nested object**
   ```js
flattenObject({a:{b:{c:1}}}) // → {'a.b.c':1}
   ```

- [ ] **134. Unflatten object**
   ```js
unflatten({'a.b.c':1}) // → {a:{b:{c:1}}}
   ```

- [ ] **135. Count letters frequency**
   ```js
letterFrequency("Mississippi") // → {m:1,i:4,s:4,p:2}
   ```

- [ ] **136. Most frequent element**
   ```js
mostFrequent([1,2,2,3,3,3]) // → 3
   ```

- [ ] **137. Rotate array k steps**
   ```js
rotate([1,2,3,4,5], 2) // → [4,5,1,2,3]
   ```

---
## 📌 Search/Subset/Permutations
- [ ] **138. Subset sum (existence)**
   ```js
subsetSum([3,34,4,12,5,2], 9) // → true
   ```

- [ ] **139. All subsets (power set)**
   ```js
subsets([1,2,3]) // → [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
   ```

- [ ] **140. All permutations of a string**
   ```js
permutations("ABC") // → ["ABC","ACB","BAC","BCA","CAB","CBA"]
   ```

- [ ] **141. Two Sum**
   ```js
twoSum([2,7,11,15], 9) // → [0,1]
   ```

- [ ] **142. Three Sum**
   ```js
threeSum([-1,0,1,2,-1,-4]) // → [[-1,-1,2],[-1,0,1]]
   ```

- [ ] **143. Longest Increasing Subsequence**
   ```js
LIS([10,9,2,5,3,7,101,18]) // → 4
   ```

- [ ] **144. Longest Common Subsequence**
   ```js
LCS("abcde","ace") // → 3
   ```

- [ ] **145. Edit distance (Levenshtein)**
   ```js
editDistance("kitten","sitting") // → 3
   ```

- [ ] **146. Minimum path sum in grid**
   ```js
minPathSum([[1,3,1],[1,5,1],[4,2,1]]) // → 7
   ```

- [ ] **147. Coin change (min coins)**
   ```js
coinChange([1,2,5], 11) // → 3
   ```

---
## 📌 Matrix & 2D
- [ ] **148. Input and print 3x3 matrix**
   ```js
printMatrix([[1,2,3],[4,5,6],[7,8,9]])
   ```

- [ ] **149. Add two matrices**
   ```js
add([[1,2],[3,4]], [[5,6],[7,8]]) // → [[6,8],[10,12]]
   ```

- [ ] **150. Subtract two matrices**
   ```js
subtract([[5,6],[7,8]], [[1,2],[3,4]]) // → [[4,4],[4,4]]
   ```

- [ ] **151. Multiply two square matrices**
   ```js
multiply([[1,2],[3,4]], [[2,0],[1,2]]) // → [[4,4],[10,8]]
   ```

- [ ] **152. Transpose of a matrix**
   ```js
transpose([[1,2,3],[4,5,6]]) // → [[1,4],[2,5],[3,6]]
   ```

- [ ] **153. Sum of right diagonal**
   ```js
sumRightDiagonal([[1,2,3],[4,5,6],[7,8,9]]) // → 15
   ```

- [ ] **154. Sum of left diagonal**
   ```js
sumLeftDiagonal([[1,2,3],[4,5,6],[7,8,9]]) // → 15
   ```

- [ ] **155. Sum of rows and columns**
   ```js
sumRowsCols([[1,2],[3,4]]) // → {rows:[3,7], cols:[4,6]}
   ```

- [ ] **156. Lower triangular matrix (print)**
   ```js
lowerTriangular([[1,2,3],[4,5,6],[7,8,9]])
   ```

- [ ] **157. Upper triangular matrix (print)**
   ```js
upperTriangular([[1,2,3],[4,5,6],[7,8,9]])
   ```

---
## 📌 Extra – Insertion/Deletion
- [ ] **158. Insert in sorted array**
   ```js
insertSorted([1,3,5,7], 4) // → [1,3,4,5,7]
   ```

- [ ] **159. Insert in unsorted array**
   ```js
insertUnsorted([3,1,4], 2) // → [3,1,4,2]
   ```

- [ ] **160. Delete element at position**
   ```js
deleteAt([10,20,30,40], 2) // → [10,20,40]
   ```

- [ ] **161. Merge one sorted array into another**
   ```js
mergeInto([1,2,3,0,0,0], 3, [2,5,6], 3) // → [1,2,2,3,5,6]
   ```

- [ ] **162. Row with maximum 1s (binary matrix)**
   ```js
rowWithMaxOnes([[0,1,1],[1,1,1],[0,0,1]]) // → 2
   ```

---
✨ Total Tasks: **162**
