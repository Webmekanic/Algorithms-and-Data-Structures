// In this kata you have to write a Morse code decoder for wired electrical telegraph.
// Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

// When transmitting the Morse code, the international standard specifies that:

// "Dot" – is 1 time unit long.
// "Dash" – is 3 time units long.
// Pause between dots and dashes in a character – is 1 time unit long.
// Pause between characters inside a word – is 3 time units long.
// Pause between words – is 7 time units long.
// However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

// For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

// For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:

// 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

// As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

// That said, your task is to implement two functions:

// Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.
// 2. Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.

// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you (see the solution setup, to get its identifier in your language).

// Eg:
//   morseCodes(".--") //to access the morse translation of ".--"
// All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

// Good luck!

var decodeBits = function (bits) {
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces
  return bits
    .replace("111", "-")
    .replace("000", " ")
    .replace("1", ".")
    .replace("0", "")
}

var decodeMorse = function (morseCode) {
  // ToDo: Accept dots, dashes and spaces, return human-readable message
  return morseCode
    .replace(".", MORSE_CODE["."])
    .replace("-", MORSE_CODE["-"])
    .replace(" ", "")
}

// Test
decodeMorse(
  decodeBits(
    "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
  )
) //  => 'HEY JUDE'

var decodeBits = function (bits) {
  const trimBits = bits.replace(/(^0+|0+$)/g, "").split("")
  const result = []
  var word = []
  if (trimBits.length > 3) {
    trimBits.every((v, i, array) => {
      if (i > 0 && i < array.length - 1) {
        return v == array[i - 1]
          ? word.push(v)
          : result.push(word) && (word = []) && word.push(v)
      } else if (i == array.length - 1) {
        return v == array[i - 1]
          ? word.push(v) && result.push(word)
          : result.push(word) && result.push([v])
      } else {
        return word.push(v)
      }
    })
    if (result.length === 1) {
      return result[0][0] == 1 ? "." : "-".repeat(result[0].length / 3)
    } else if (
      result.map((v) => v.join(""))[1].length == 1 &&
      result.length == 3
    ) {
      let result1 = result.map((v) => v.join(""))
      return result1
        .map((v) =>
          v[0] == 1 ? (v.length <= 2 ? "." : "-") : v.length >= 1 ? " " : "   "
        )
        .join("")
    } else {
      return result
        .map((v) => v.join(""))
        .map((v) => {
          if (v[0] == 0) {
            if (v.length % 2 == 0) {
              if (v.length > 6) {
                return "       "
              }
              if (v.length == 6) {
                return "   "
              } else {
                return " "
              }
            } else if (v.length == 7) {
              return "       "
            } else if (v.length == 3) {
              return "   "
            } else if (v.length > 7) {
              return "   ".repeat(v.length / 7 - 1)
            } else {
              return " "
            }
          } else if (v[0] == 1) {
            if (v.length % 2 == 0 && v.length % 3 != 0) {
              return String.fromCharCode(46).repeat(v.length / 2)
            } else if (v.length % 3 == 0) {
              return String.fromCharCode(45)
            } else {
              return String.fromCharCode(46)
            }
          }
        })
        .join("")
    }
  } else {
    return trimBits.every((v, i, arr) => v === arr[0]) && trimBits[0] == 1
      ? "."
      : ".."
  }
}

var decodeMorse = function (morseCode) {
  return morseCode
    .split("       ")
    .map((v) => v.split("   "))
    .map((v) => v.map((val) => MORSE_CODE[val.replace(/\s/g, "")]).join(""))
    .join(" ")
}
