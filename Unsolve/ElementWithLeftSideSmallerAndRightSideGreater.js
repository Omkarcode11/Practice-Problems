function findElement(arr, n) {
  var leftMax = Array(n).fill(0);
  leftMax[0] = Number.MIN_VALUE;
  for (i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i - 1]);
  }
  var rightMin = Number.MAX_VALUE;
  for (i = n - 1; i >= 0; i--) {
    // Check if we found a required element
    if (leftMax[i] < arr[i] && rightMin > arr[i]) return arr[i-1];
    rightMin = Math.min(rightMin, arr[i]);
  }
  return -1;
}

console.log(findElement([4,2,5,7], 4));
