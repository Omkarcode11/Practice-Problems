function minJumps(arr, n) {
  if (n <= 1) return 0;
  if (arr[0] == 0) return -1;
  let maxReach = arr[0];
  let step = arr[0];
  let jump = 1;

  for (let i = 1; i < n; i++) {
    if (i == n - 1) {
      return jump;
    }
    maxReach = Math.max(maxReach, arr[i] + i);
    step--;

    if (step == 0) {
      jump++;
      if (i >= maxReach) {
        return -1;
      }
      step = maxReach - i;
    }
  }
  return -1;
}

console.log(minJumps([9, 10, 1, 2, 3, 4, 8, 0, 0, 0, 0, 0, 0, 0, 1], 15));

// 35
// 1 3 5 8 9 2 6 7 6 8 9 4 3 3 4 5 5 4 3 4 5 3 2 3 4 5 5 3 2 4 3 4 2 4 2 3 2 2

// 15
// 9 10 1 2 3 4 8 0 0 0 0 0 0 0 1
// 1 2  3 4 5 6 7 8 9 0 1 2 3 4 5
// ans
