// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let newStr = ""
  let regex = /[A-Z]/
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) {
      //if the ith value of str is a character A-Z:
      let index = alphabet.indexOf(str[i]) //using the current letter, find its index position from the alphabet

      let newIndex = index + 13 //shift the index by adding 13
      if (newIndex > 26) {
        //if the shifted value goes past the letters of the alphabet...
        newIndex = newIndex - 26 //...subtract the alphabet length from the value...
        newStr += alphabet[newIndex] //...and start from the beginning of the alphabet. Add the character to the new string.
      } else if (newIndex == 26) {
        //should combine this else if with the if above:  newIndex >= 26.
        newStr += alphabet[0]
      } else {
        //if under 26, then just add character to new string
        newStr += alphabet[newIndex]
      }
    } else {
      //if this isn't a character A-Z, then just pass it on to the new string
      newStr += str[i]
    }
  }
  console.log(newStr)
  //return newStr; //original value for freeCodeCamp.org answer
}

// rot13("SERR CVMMN!")
rot13("SERR YBIR?")

// console.log(rot13("SERR CVMMN!"))

// rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

// rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

// rot13("SERR YBIR?") should decode to the string FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
