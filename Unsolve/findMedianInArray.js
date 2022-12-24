function find_median(arr) {
  //code here
  let length = arr.length;
  if (length == 1) return arr[0];
  arr.sort((a, b) => a - b);
  if (length % 2 == 0) {
    let mid = length/2
    let right = arr[mid];
    let left = arr[mid-1];
    return (right + left) / 2;
  } else {
    return arr[Math.ceil(length / 2)];
  }
}

console.log(find_median([11, 19]));
