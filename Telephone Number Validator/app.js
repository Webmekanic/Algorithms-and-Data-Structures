function telephoneCheck(str) {
  let re = /^\(?\d{1,3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
  if (re.test(str)) {
    return true
  } else {
    return false
  }
}

console.log(telephoneCheck("1 555 555 5555"))

console.log(telephoneCheck("555-555-5555"))

console.log(telephoneCheck("(555)555-5555"))

console.log(telephoneCheck("(555) 555-5555"))

console.log(telephoneCheck("555 555 5555"))
console.log(telephoneCheck("555555555"))
