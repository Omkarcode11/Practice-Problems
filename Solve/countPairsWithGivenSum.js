function getPairsCount(arr, n, k) {
  let map = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
     let b = k - arr[i]
    if (map[b]) {
      count += map[b];
    }
    if(map[arr[i]]){
        map[arr[i]]++
    }else{
        map[arr[i]] = 1
    }
  }
  return count;
}

console.log(
  getPairsCount(
    [
     1,5,7,1
    ],
    4,
    6
  )
);
