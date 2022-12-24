function remove_duplicate(arr, n) {
  if (n == 0 || n == 1) return n;

  // To store index of next unique element
  var j = 0;
  let count = n-1;
  // Doing same as done in Method 1
  // Just maintaining another updated index i.e. j
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[j++] = arr[i];
      count--;
    }
  }
  //  if(count==0){
  //     return arr[count]
  //  }
  arr[j++] = arr[n - 1];
  arr.length =n- count;
  return arr;
}

var arr = [1,2, 2, 2, 2,3];
var n = arr.length;

console.log(remove_duplicate(arr, n));
