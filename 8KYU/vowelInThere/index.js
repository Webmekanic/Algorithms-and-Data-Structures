// Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  var ans = []

  for (var i = 0; i < a.length; i++) {
    // console.log(a[i])
    if (
      a[i] === 97 ||
      a[i] === 101 ||
      a[i] === 105 ||
      a[i] === 111 ||
      a[i] === 117
    ) {
      ans.push(String.fromCharCode(a[i]))
    } else {
      ans.push(a[i])
    }
  }

  return ans
}

console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]))

// ["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103])
