function longestCommonPrefix(arr, n) {
  //code here
  let s = arr[0];
  if(n==1)return s
  let str = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j][i] != arr[j+1][i]) {
        if (str.length >= 1) {
          return str;
        }
        return -1;
      }
      if(j==n-2){
          str += arr[j][i];
      }
    }
  }
  if(str.length>=1){
      return str
  }
  return -1
}

console.log(longestCommonPrefix(['g'], 1));
