// Using Javascript, convert the following array.

// ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]]

// to:

// "a < b OR (c == d AND  e != f)"
function answer(params) {
  let newArr = [...params]
  let count = 0

  function refArr(params) {
    let newValues = [...params]
    newValues[0] = params[1]
    newValues[1] = params[0]
    if (count == 0) {
      newValues = ["(", ...newValues]
    } else {
      newValues = [...newValues, ")"]
    }
    count++
    return newValues
  }

  function mutantArr(operationArr) {
    let reOrderArr = [...operationArr]

    operationArr.forEach((element, index, operationSubArr) => {
      if (typeof element === "string" && index === 0) {
        reOrderArr[index] = operationSubArr[index + 1]
        reOrderArr[index + 1] = element
      } else if (typeof element === "object") {
        let madAns = refArr(element)
        reOrderArr[reOrderArr.indexOf(element)] = madAns
      }
    })
    return reOrderArr.flat()
  }
  params.forEach((element, index, paramsArr) => {
    if (typeof element === "string" && index === 0) {
      newArr[index] = paramsArr[index + 1]
      newArr[index + 1] = element
    } else if (typeof element === "object") {
      let madAns = mutantArr(element)
      newArr[newArr.indexOf(element)] = madAns
    }
  })

  console.log(newArr.flat().join(" "))
}

answer(["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]])
