// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  return numbers
    .map((x) => x * x)
    .reduce((prevNum, currNum) => prevNum + currNum, 0)
}
console.log(squareSum([])) // 5
// .reduce((prevNum, currNum) => prevNum + currNum)
