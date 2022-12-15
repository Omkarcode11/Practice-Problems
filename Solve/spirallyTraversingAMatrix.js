function spirallyTraverse(matrix, r, c) {
  let direction = 1;
  let top = 0;
  let bottom = r - 1;
  let right = c - 1;
  let left = 0;
  let arr = [];

  while (top <= bottom && right >= left) {
    if (direction == 1) {
      for (let i = left; i <= right; i++) {
        arr.push(matrix[top][i]);
      }
      top++;
      direction++;
    } else if (direction == 2) {
      for (let i = top; i <= bottom; i++) {
        arr.push(matrix[i][right]);
      }
      right--;
      direction++;
    } else if (direction == 3) {
      for (let i = right; i >= left; i--) {
        arr.push(matrix[bottom][i]);
      }
      bottom--;
      direction++;
    }
    // clear this side
    else if (direction == 4) {
      for (let i = bottom; i >= top; i--) {
        arr.push(matrix[i][left]);
      }
      left++;
      direction = 1;
    }
  }
  return arr;
}

let r = 4;
let c = 4;
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(spirallyTraverse(matrix, r, c));
