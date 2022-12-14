function firstElementKTime(arr, n, k) {
  //code here
  let Map = {};
  for (let i = 0; i < n; i++) {
    if(Map[arr[i]]){
      Map[arr[i]]++
    }else {
      Map[arr[i]] = 1
    }
    if(Map[arr[i]]==2){
      return arr[i]
    }
}
return -1
}
let N = 7;
let K = 2;
let A = [1, 7, 4, 3, 4, 8, 7];
console.log(firstElementKTime(A,N,K))