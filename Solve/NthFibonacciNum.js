function nthFibonacci(n) {
  let modulo = 1000000007
  let a = 0
  let b = 1
  let c;
  for (let i = 2; i <= n; i++) {
      c = a+b
      a = b
      b = c%modulo
  }
  return b
}

console.log(nthFibonacci(656));
