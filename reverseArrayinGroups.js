function reverseInGroups(arr, n, k) {
  // code here
  let s = 0;
  let e = k - 1;
  for (let i = 0; i < n; i = i + k) {
    s = i;
    e = i + (k - 1);
    if (e > n - 1) {
      e = n - 1;
    }
    while (s < e) {
      if (s == e) break;
      let temp = arr[s];
      arr[s] = arr[e];
      arr[e] = temp;
      s++;
      e--;
    }
  }
  return arr;
}

console.log(reverseInGroups([1, 2, 3, 4, 5], 5, 3));
