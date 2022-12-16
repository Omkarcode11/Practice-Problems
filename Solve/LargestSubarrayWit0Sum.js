function maxLen(arr, n) {
  let map = {};
  let sum = 0;
  let maxLen = 0;
  let len = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum == 0) {
      if (maxLen < i) {
        maxLen = i+1;
      }
    }
    if (map[sum]) {
      len = i - (map[sum] - 1);
      if (len > maxLen) {
        maxLen = len;
      }
    } else {
      map[sum] = i + 1;
    }
  }
  return maxLen;
}

let N = 1;
let A = [0];
console.log(maxLen(A, N));
