function isIsogram(str) {
  let newStr = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      console.log([j])
      if (newStr[i] === newStr[j]) {
        return false
      }
    }
  }
  return undefined
}
console.log(isIsogram("isogram"))
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
