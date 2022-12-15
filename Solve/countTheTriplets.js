function countTriplet(arr, n) {
  let map = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] + arr[j];
      if (map[sum]) {
        count += map[sum];
      }
    }
  }
  return count;
}

console.log(countTriplet([1, 5, 3, 2], 4));
