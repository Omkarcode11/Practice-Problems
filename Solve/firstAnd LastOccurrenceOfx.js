function find(arr, n, x) {
  let max = -1;
  let min = -1;
  let flag = true;
  for (let i = 0; i < n; i++) {
    if (flag && arr[i] == x) {
      min = i;
      max = i;
      flag = false;
    } else if (arr[i] == x) {
      max = i;
    }
  }
  return [min, max];
}

console.log(find([6, 9], 2, 9));
