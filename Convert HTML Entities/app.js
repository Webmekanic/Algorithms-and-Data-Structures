// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let regex = /[&|<|>|"|']/g
  let newArray = str.replace(regex, (match) => {
    if (match === "&") {
      return " &amp;"
    } else if (match === "<") {
      return "&lt;"
    } else if (match === ">") {
      return "&gt;"
    } else if (match === '"') {
      return "&quot;"
    } else {
      return "&apos;"
    }
  })
  return newArray
}

// console.log(convertHTML("Hamburgers < Pizza < Tacos"))

// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

// convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

// convertHTML("Schindler's List") should return the string Schindler&apos;s List.

// convertHTML("<>") should return the string &lt;&gt;.

// convertHTML("abc") should return the string abc.

// Using Switches to solve the problem
function convertHTML(str) {
  // Split by character to avoid problems.
  var temp = str.split("")
  // Since we are only checking for a few HTML elements, use a switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;"
        break
      case "&":
        temp[i] = "&amp;"
        break
      case ">":
        temp[i] = "&gt;"
        break
      case '"':
        temp[i] = "&quot;"
        break
      case "'":
        temp[i] = "&apos;"
        break
    }
  }

  temp = temp.join("")
  return temp
}

//test here
console.log(convertHTML("Dolce & Gabbana"))
