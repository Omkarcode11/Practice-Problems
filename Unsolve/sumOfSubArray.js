function subarraySum(arr, n, su) {
  //your code here
  let s = 0;
  let i = 1;
  let sum = arr[0];
  while (s != n) {
    if (sum == su) return [s + 1, i];
    if (sum > su) {
      sum -= arr[s];
      s++;
    } else if (sum<su || i==n) {
      sum += arr[i];
      i++;
    }
  }
  return false;
}

// 5 12
// 42 468
let ar = [
  135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 117,
  119, 96, 48, 127, 172, 139, 70, 113, 68, 100, 36, 95, 104, 12, 123, 134,
];
console.log(subarraySum(ar, 42, 468));
