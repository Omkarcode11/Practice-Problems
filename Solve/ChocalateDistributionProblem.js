function findMinDiff(arr, n, m) {
  //code here
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = i + (m-1);
  let num = Number.MAX_VALUE;
  while (j < n) {
    let diff = arr[j] - arr[i];
    if (diff < num) {
      num = diff;
    }
    i++
    j++
  }
  return num;
}

console.log(findMinDiff([7, 3, 2, 4, 9, 12, 56], 7, 3));
