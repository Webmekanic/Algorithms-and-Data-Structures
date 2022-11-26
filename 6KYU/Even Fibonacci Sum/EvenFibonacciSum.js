// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.

// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

// 0 1 1 2 3 5 8 13 21...

// For example:

// fibonacci(0)==0
// fibonacci(33)==10
// fibonacci(25997544)==19544084

function fibonacci(max) {
  // Your code goes here
  let temp,
    sum = 0,
    a = 0,
    b = 1
  while (b < max) {
    if (b % 2 === 0) {
      sum += b
    }
    temp = a
    a = b
    b += temp
  }
  return sum
}

fibonacci(2147483647) // 1485607536
//  fibonacci(1000000000) 350704366
//  fibonacci(100000000) 82790070
// fibonacci(1000000) 1089154
// fibonacci(1000) 798
// fibonacci(100) 44
