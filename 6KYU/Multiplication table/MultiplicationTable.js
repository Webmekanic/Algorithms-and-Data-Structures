// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  // insert code here
  const table = []
  for (let i = 1; i <= size; i++) {
    let elem = []
    for (let j = 1; j <= size; j++) {
      elem.push(i * j)
    }
    table.push(elem)
  }

  return table
}

// Test Case
console.log(multiplicationTable(3))
// [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
