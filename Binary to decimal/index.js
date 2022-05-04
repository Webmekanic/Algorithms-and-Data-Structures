// Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin) {
  let splitstr = bin.split("")
  let convertToDeci = 0
  for (let i = 0; i < splitstr.length; i++) {
    const convertStrToNum = Number(splitstr[i] * 2)
    const strPow = splitstr.length - 1 - i
    // console.log(Math.pow(convertStrToNum, strPow))
    convertToDeci += Math.pow(convertStrToNum, strPow)
    // console.log(Math.pow(0, 0))

    // console.log(convertToDeci)
  }
  return convertToDeci
}
console.log(binToDec("11001010"))
// 11001010

// describe("Example Tests", () => {
// ;[
//   ["1", 1],
//   ["0", 0],
//   ["1001001", 73],
// ].forEach(([inp, exp]) => Test.assertEquals(binToDec(inp), exp))
