function max_of_subarrays(arr, n, k) {
  let i = 0;
  let j = k-1;
  let res = [];
  let maxNum = Number.MIN_VALUE;
  let secMax = maxNum;

  for (let i = 0; i <= j; i++) {
    if (maxNum < arr[i]) {
      secMax = maxNum;
      maxNum = arr[i];
    }
  }
  res.push(maxNum);
  i++;
  j++;
  while (j < n) {
    secMax = 
      if (arr[j] > maxNum) {
          maxNum = arr[j];
      i++
      j++
      arr.push(maxNum);
    }else if (arr[i - 1] == maxNum) {
        maxNum = secMax;
        res.push(maxNum)
        i++
        j++
    }
    else if(arr[i-1]!=maxNum){
        res.push(maxNum)
        i++
        j++
    }
}

return res;
}

let n = 10;
let k = 3;
let arr = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];

console.log(max_of_subarrays(arr, n, k));
