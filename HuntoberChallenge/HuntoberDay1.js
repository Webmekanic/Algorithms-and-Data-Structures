/* PROBLEM STATEMENT::: Huntober String Challenge Day 1
https://blog.barbaralaw.me/huntober-2022-day-1
This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.
Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.
Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.
COPY
COPY
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
As an example, here is how a string looks before and after the characters are fixed:
"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."
Please create a function that will fix a given string of this mistake before incalculable damage can be done!
*/

// SOLUTION IS O(n) because it must iterate the string s one time
function fixFunction(s) {
  // apply keys in sequence; string or array doesn't matter here
  const arr = ["O", "I", "Z", "E", "h", "S", "G", "L", "B", "q"]
  const keys = "OIZEhSGLBq"
  // in order for anything to work, it must be an array
  let a = s.split("")s
  for (let i = 0; i < a.length; i++) {
    let char = a[i]
    // if it's a letter and shouldn't be...
    if (arr.includes(char)) {
      let ind = keys.indexOf(char)
      a[i] = ind
    }
    // if it's a number and shouldn't be
    else if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      a[i] = keys[char]
    }
  }
  return a.join("")
}


/* SAMPLE TESTS:::*/
console.log(fixChars("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))
