function zigZag(arr, n) {
  let flag = false;
  for (let i = 0; i < n; i++) {
    if (!flag) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        flag = true
      } else {
        flag = true;
        continue;
      }
    }
    else if (flag){
        if(arr[i]< arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            flag = false
        }else{
            flag = false
            continue
        }
    }
  }
  return arr
}

console.log(zigZag([4, 3, 7, 8, 6, 2, 1], 7));
