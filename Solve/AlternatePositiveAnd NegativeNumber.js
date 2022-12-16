function rearrange(arr, n) {
  let i = 0;
  let j = 0;
  let flag = true;
  let res = [];
  while (j < n && i < n) {
    if (flag) {
      if (arr[i] >= 0) {
        res.push(arr[i]);
        flag = false;
      }
      i++;
    } else if (!false) {
      if (arr[j] < 0) {
        res.push(arr[j]);
        flag = true;
      }
      j++;
    }
  }
  flag = true;
  if (flag) {
    while (i < n) {
      if (arr[i] >= 0) {
        res.push(arr[i]);
      }
      i++;
    }
    flag = false;
  }
  if (!flag) {
    while (j < n) {
      if (arr[j] < 0) {
        res.push(arr[j]);
      }
      j++;
    }
  }
  return res;
}

let n = 10;
let arr = [27, -85, -8, 15, 52, 25, 88, -35, 4, 10];

console.log(rearrange(arr, n));
