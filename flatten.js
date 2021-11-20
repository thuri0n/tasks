const arr = [
  1,
  [2, 3, 4],
  5,
  [6, [7, 8, 9], [10, 11, [12, 13, 14]]],
]

// function* flat(arr) {
//   for(const item of arr) {
//     if(item instanceof Array) {
//       yield* flat(item)
//     } else {
//       yield item
//     }
//   }
// }


function flatten(list) {
  const result = []
  const flat = (arr) => {
    for(let item of arr) {
      if(item instanceof Array) {
        flat(item)
      } else {
        result.push(item)
      }
    }
    return result
  }

  return flat(list)
}


console.log(flatten(arr))
