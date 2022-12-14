function MissingNumber(array, n) {
  //code here
  let obj = {};
  for (let i = 1; i <= n; i++) {
    obj[i] = 1;
  }
  for (let j = 0; j < n; j++) {
    if (obj[array[j]]==1) {
      obj[array[j]]++;
    }
}
    for (const key in obj) {
      if (obj[key] == 1) {
        return key;
      }
    }
  }


console.log(MissingNumber([1, 2, 3, 4, 6, 7], 7));
