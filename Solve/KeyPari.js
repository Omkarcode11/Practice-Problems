function hasArrayTwoCandidates(arr, n, x) {
  //code here
  let map = {};
  for (let i = 0; i < n; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    let num = x - arr[i];
    if (num == arr[i] && map[num] == 1) {
      continue;
    }
    if (map[num]) {
      return true;
    }
  }
  return false;
}

let N = 5;
let X = 4;
let Arr = [1, 2, 4, 6, 7];

console.log(hasArrayTwoCandidates(Arr, N, X));
