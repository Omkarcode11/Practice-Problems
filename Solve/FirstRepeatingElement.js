function firstRepeated(arr, n) {
  let map = {};
  for (let i = 0; i < n; i++) {
    if (map[arr[i]]) 
    map[arr[i]]++;
    else
     map[arr[i]] = 1;
  }
  for (let i = 0; i < n; i++) {
    if(map[arr[i]]>=2){
        return i+1
    }
  }
  return -1
}


console.log(firstRepeated([1,5,3,4,3,5,6],7));