function print2largest(arr, n) {
  let max = arr[0];
  let sMax = 0;
  for (let i = 0; i < n; i++) {
    if (max < arr[i]) {
      sMax = max;
      max = arr[i];
    }
    if(sMax<arr[i]  && arr[i]<max){
        sMax = arr[i]
    }
  }
  //code here
  if(sMax == 0){
    return -1
  }
  return sMax;
}

console.log(print2largest([1,1,1,1,1,1,1,1,1,1,1,1,1,1], 14));
