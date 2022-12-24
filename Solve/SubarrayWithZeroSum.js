function subArrayExists(arr, n) {
  // code here
  let map = {};
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (map[sum] || sum == 0) {
      return true;
    }else{
      map[sum] = true
    }
  }
  return false
}

let arr = [4, 2, -3, 1, 6];
let n = 5;
console.log(subArrayExists(arr, n));
