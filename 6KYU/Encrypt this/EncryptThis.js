// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (text) => {
  return text
    .split(" ")
    .map((e) => {
      if (e.length === 1) return e.charCodeAt(0)
      if (e.length === 2) return `${e[0].charCodeAt(0)}${e[1]}`
      if (e.length === 3) return `${e[0].charCodeAt(0)}${e.slice(-1)}${e[1]}`
      if (e.length > 3)
        return `${e[0].charCodeAt(0)}${e.slice(-1)}${e.slice(2, -1)}${e[1]}`
    })
    .join(" ")
}

console.log(encryptThis("A wise old owl lived in an oak"))

//  encryptThis("A wise old owl lived in an oak") "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"

// encryptThis("A") "65";
// encryptThis("The more he saw the less he spoke") "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
// encryptThis("The less he spoke the more he heard") "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
// encryptThis("Why can we not all be like that wise old bird") "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
// encryptThis("Thank you Piotr for all your help") "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple";
