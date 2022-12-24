function rotateArr(arr, d, n) {
  // code here
  let j = 0
  let lol = new Array(n);
  for (let i = d; i < n; i++) {
    lol[j] = arr[i];
    j++
    
  }
  for (let i = 0; i < d; i++) {
    lol[j] = arr[i];
    j++
  }
  return lol;
}

console.log(rotateArr([2,4,6,8,10,12,14,16,18,20], 3, 10));
console.log(rotateArr([1,2,3,4,5], 2, 5));
