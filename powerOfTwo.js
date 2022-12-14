function isPowerOfTwo(n) {
  let num = Math.sqrt(n)
  if((num*num)!=n){
    return "No"
  }else{
    return "Yes"
  }
  
}

// console.log(isPowerOfTwo(15));

console.log(isPowerOfTwo(15))