// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let newString = s1 + s2
  let sortFrom = []
  for (let i = 0; i < newString.length; i++) {
    if (!sortFrom.includes(newString[i])) {
      sortFrom.push(newString[i])
    }
  }
  return sortFrom.sort().join("")
}
console.log(longest("aretheyhere", "yestheyarehere"))
