function duplicates(a, n) {
  let obj = {};
  let arr = [];
  //your code here
  for (let i = 0; i < n; i++) {
    if (a[i] == n - 1) return -1;
    if (obj[a[i]]) {
      obj[a[i]]++;
    } else {
      obj[a[i]] = 1;
    }
  }
  for (let i in obj) {
    if (obj[i] > 1) {
      arr.push(i);
    }
  }
  if (arr.length == 0) {
    return -1;
  } else {
    return arr;
  }
}
console.log(duplicates([0, 3, 1, 2], 4));
