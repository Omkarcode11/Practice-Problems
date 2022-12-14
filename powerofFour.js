function isPowerOfFour(n) {
  //write your logic here, return the output
 if (n != 0 && n == Math.pow(4, Math.log(n) / Math.log(4))) {
   return true;
 }
 return false;
}

console.log(isPowerOfFour(4));

