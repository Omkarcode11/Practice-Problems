function binarysearch(arr, n, k) {
  // code here
  let s = 0;
  let e = n;
  let mid = 0;
  while (s <= e) {
    mid = Math.floor((e + s) / 2);
    if (arr[mid] < k) {
      s = mid;
    } else if (arr[mid] > k) {
      e = mid;
    } else if (arr[mid] == k) {
      return mid;
    }
  }
  return false;
}

console.log(
  binarysearch(
    [
      1, 2, 3, 4, 5, 6, 8, 9, 10, 14, 16, 19, 22, 23, 25, 26, 27, 29, 31, 34, 35, 36, 38, 39, 40, 45, 46, 48, 50, 51,
      52, 57, 59, 60, 61, 63, 67, 68, 69, 71, 75, 76, 77, 79, 81, 82, 83, 86, 87, 88, 90, 92, 93, 94, 95, 96, 98, 99,
      100, 93,
    ],
    59,
    93
  )
);
