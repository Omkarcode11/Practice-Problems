function rearrange(arr, n) {
  let maximum = arr[n - 1] + 1;
  let j = n - 1;
  let i = 0;
  for (let k = 0; k < n; k++) {
    if (k % 2 == 0) {
      arr[k] = arr[k] + (arr[j] % maximum) * maximum;
      j--;
    } else {
      arr[k] = arr[k] + (arr[i] % maximum) * maximum;
      i++;
    }
  }
  for (let m = 0; m < n; m++) {
    arr[m] = Math.floor(arr[m] / maximum);
  }
  return arr;
}


console.log(rearrangeArray([1,2,3,4,5,6],6));
