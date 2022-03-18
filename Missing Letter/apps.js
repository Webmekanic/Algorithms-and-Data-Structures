// Missing letters
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let startingpoint = alphabet.indexOf(str[0])
  for (let i = 0; i < str.length; i++) {
    // console.log(alphabet[startingpoint + i])
    if (str[i] !== alphabet[startingpoint + i]) {
      return alphabet[startingpoint + i]
    }
  }

  return undefined

  // return str
}

console.log(fearNotLetter("abce"))

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// fearNotLetter("abce") should return the string d.

// fearNotLetter("abcdefghjklmno") should return the string i.

// fearNotLetter("stvwx") should return the string u.

// fearNotLetter("bcdf") should return the string e.

// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
