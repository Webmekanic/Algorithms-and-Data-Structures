// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = function (iterable) {
  let strArr
  let newOrder = []
  if (typeof iterable === "string") {
    strArr = iterable.split("")
  } else {
    strArr = iterable
  }
  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i]
    console.log(newOrder[newOrder.length - 1])
    if (newOrder[newOrder.length - 1] != element) {
      newOrder.push(strArr[i])
    }
  }
  return newOrder
  // console.log(newOrder);
}

// test case
uniqueInOrder("AAAABBBCCDAABBB") //['A','B','C','D','A','B']
