function nextLargerElement(arr, n) {
  let s = new Array();
  let res = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    while (s.length != 0 && s[s.length - 1] <= arr[i]) s.pop();

    if (s.length == 0) {
      res[i] = -1;
    } else {
      res[i] = s[s.length-1]
    }
    s.push(arr[i])
  }
  return res
}

let arr = [6, 8, 0, 1, 3];
let n = 5;
console.log(nextLargerElement(arr, n));
