const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

const rotateLeft = (arr) => {
  const result = []

  //arr[0][0] = result[3][0]
  //arr[0][1] = result[2][0]
  //arr[0][2] = result[1][0]
  //arr[0][3] = result[0][0]

  // [1, 2, 3, 4],
  // [5, 6, 7, 8],
  // [9, 0, 1, 2],
  // [
  //   [4, 8, 2],
  //   [3, 7, 1],
  //   [2, 6, 0],
  //   [1, 5, 9],
  // ]

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0, c = arr[i].length - 1; j <= arr[i].length - 1; j++, c--) {
      if(!(result[c] instanceof Array)) result[c] = []
      result[c][i] = arr[i][j]
    }
  }

  return result
}

const rotateRight = (arr) => {
  // [
  //   [9, 5, 1],
  //   [0, 6, 2],
  //   [1, 7, 3],
  //   [2, 8, 4],
  // ]

  const result = rotateLeft([...arr]).reverse()

  return result.map(item => item.reverse())
}
