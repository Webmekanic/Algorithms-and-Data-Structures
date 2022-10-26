// @params = an array of arrays, with integers inside each array.
// @return = an integer value represents the number of distinct combinations
// including one integer value from each subarray.
// SOLVE = dedupe each subarray, we only care about the length of each deduped array
// length of the set will always be the multiples of distinct numbers

// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

function solve(arr) {
  arr = arr.map((sub) => new Set(sub).size) // dedupe & transform to length CHECK
  //return arr.reduce((acc,curr) => acc * curr.length, 1)
  let poss = 1
  for (let i = 0; i < arr.length; i++) {
    poss *= arr[i] // i = 0 => 1, i = 1 => 1 x 2, i = 2 => 2 x 2
  }
  return poss
}

// Test Cases
solve([[1, 2], [4], [5, 6]])
// 4);
// solve([
//   [1, 2],
//   [4, 4],
//   [5, 6, 6],
// ])
// 4);

// solve([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ])
// 8);
