function findPlatform(arr, dep, n) {
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);
  let max = 0;
  let count = 0;
  let i = 0;
  let j = 0;
  while (i < n) {
    if (arr[i] <= dep[j]) {
      count++;
      max = Math.max(count, max);
      i++;
    } else if (arr[i] > dep[j]) {
      j++;
      count--;
    }
  }

  return max;
}

let arr = [0900, 0940, 0950, 1100, 1500, 1800];
let dep = [0910, 1200, 1120, 1130, 1900, 2000];
let n = 6;

console.log(findPlatform(arr, dep, n));
