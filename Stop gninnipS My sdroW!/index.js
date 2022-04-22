// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" ) => returns "This is rehtona test"

function spinWords(string) {
  let newStr = []
  let splitStr = string.split(" ")
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length >= 5) {
      splitStr[i] = splitStr[i].split("").reverse().join("")
    }
  }
  return splitStr.join(" ")
}
console.log(spinWords("Stop spinning my words"))

// spinWords("Welcome") => "emocleW"
// spinWords("Hey fellow warriors") =>"Hey wollef sroirraw"
// (spinWords("This is a test") => "This is a test"
// spinWords("This is another test") =>"This is rehtona test"
// spinWords("You are almost to the last test") =>"You are tsomla to the last test"
// spinWords("Just kidding there is still one more") => "Just gniddik ereht is llits one more"
// spinWords("Seriously this is the last one") => "ylsuoireS this is the last one"
