// Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str) {
  let newStr = str.split(" ").reverse().join(" ")
  return newStr
}

console.log(reverseWords("hello world!"))

// "world! hello"
