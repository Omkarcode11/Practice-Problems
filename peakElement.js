function peakElement(arr, n) {
  let low = 0;
  let high = n - 1;
  while (low < high) {
    let mid = low + (high -  low) / 2;
    if (arr[mid] >= arr[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return high-1;
}

console.log(peakElement([17, 19, 9, 5, 3, 6, 17, 7, 18, 16, 18, 11, 3, 15, 2], 15));
