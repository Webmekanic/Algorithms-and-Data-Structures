// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  const newStr = str.replace(/[^a-z0-9]/gi, " ").split(" ")
  console.log(newStr)
  let capitalizedArr = []
  for (let i = 1; i < newStr.length; i++) {
    const elem = newStr[i]
    let theWord = elem[0].toUpperCase() + elem.slice(1, elem.length)
    capitalizedArr.push(theWord)
    console.log(capitalizedArr)
  }
  let camelCase = [newStr[0], ...capitalizedArr]
  return camelCase.join("")
}
console.log(toCamelCase("the_stealth_warrior"))

// toCamelCase(''), '', "An empty string was provided but not returned")
// toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
