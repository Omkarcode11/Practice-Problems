function leaders(a, n) {
  let v = [];
  let max = a[n-1];
  for (let i = n-1; i >= 0; i--) {
    if(a[i] >= max) {
      max = a[i];
      v.push(max);
    }
  }
  v.reverse();
  return v;
}

console.log(leaders([4, 2, 4, 3, 0], 5));
