function trappingWater(arr, n) {
  let rightArr = new Array(n);
  let leftArr = new Array(n);
  let rightMax = -1;
  let leftMax = -1;
  let allWater = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > leftMax) {
      leftMax = arr[i];
    }
    leftArr[i] = leftMax;
  }
  for (let j = n - 1; j >= 0; j--) {
    if (arr[j] > rightMax) {
      rightMax = arr[j];
    }
    rightArr[j] = rightMax;
  }

  for (let i = 1; i < n - 1; i++) {
    let water = Math.min(leftArr[i], rightArr[i]);
    allWater += water - arr[i];
  }
  return allWater;
}

console.log(trappingWater([3, 0, 0, 2, 0, 4], 6));
