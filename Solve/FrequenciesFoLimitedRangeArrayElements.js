function frequencyCount(arr, N, P) {
  let map = {};
  for (let i = 0; i < N; i++) {
    if (arr[i] <= P) {
      if (map[arr[i]]) {
        map[arr[i]]++;
      } else {
        map[arr[i]] = 1;
      }
    }
  }
  for (let i = 1; i <= N; i++) {
    if (map[i]) {
      arr[i - 1] = map[i];
    } else arr[i - 1] = 0;
  }
  //code here
  return arr;
}

console.log(frequencyCount([2, 3, 2, 3, 5], 5, 5));
