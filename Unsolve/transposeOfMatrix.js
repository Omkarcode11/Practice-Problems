function transpose(matrix, n) {
  for (let i = 0; i < n/2; i++) {
    for (let j = 0; j < n; j++) {
     let temp = matrix[i][j]
     matrix[i][j] = matrix[j][i]
     matrix[j][i] = temp
    }
  }
  return matrix;
}

console.log(
  transpose(
    [
      [1, 2],
      [-9,-2],
    ],
    2
  )
);
