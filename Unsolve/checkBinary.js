function isBinary(str) {
  //code here
  for (let i = 0; i < str.length; i++) {
    if (str[i] != 0 && str[i] != 1) {
      return 0;
    }
  }
  return 1;
}

console.log(isBinary('0111100110101100'));
