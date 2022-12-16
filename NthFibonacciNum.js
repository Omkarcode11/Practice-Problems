function nthFibonacci(n) {
  if (n < 2) return n;
  //your code here
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

console.log(nthFibonacci(10));
