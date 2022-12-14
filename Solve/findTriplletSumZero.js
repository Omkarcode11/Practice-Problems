function findTriplets(arr, n) {
  //your code here
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum == 0) {
        return 1;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return 0;
}

console.log(findTriplets([0, -1, 1, -3, 2], 5));
