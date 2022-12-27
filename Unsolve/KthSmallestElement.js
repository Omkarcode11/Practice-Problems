// function kthSmallest(arr, l, r, k) {
//   let pSwap = 0;
//   while (l <= r) {
//     let randomNum = Math.floor(Math.random() * (r - l) + l);
//     let pivot = arr[randomNum];
//     for (let i = l; i <= r; i++) {
//       if (arr[i] < pivot) {
//         let temp = arr[i];
//         arr[i] = arr[pSwap];
//         arr[pSwap] = temp;
//         pSwap++;
//       }
//     }
//     let temp =pivot;
//     pivot = arr[pSwap];
//     arr[pSwap] = temp;
//     if((pSwap+1)==k){
//         return pivot
//     }
//     if(pSwap<k){
//         l = pSwap+1
//     }else{
//         r = pSwap-1
//     }
//     pSwap = 0;

// }
// }

function kthSmallest(arr, l, r, k) {}

function swap(arr, l, r) {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}

function randomPartition(arr, l, r) {
  let n = r - l + 1;
  let pivot = Math.floor(Math.random * n);
  swap(arr, l + pivot, r);
  return partition(arr, l, r);
}

function kthSmallest(arr, l, r, k) {
  if (k > 0 && k <= r - l + 1) {
    let pos = randomPartition(arr, l, r);
    if (pos - 1 == k - 1) {
      return arr[pos];
    }
    if (pos - l == k - 1) {
      return kthSmallest(arr, l, pos - 1, k);
    }
    return kthSmallest(arr, pos + 1, r, k - pos + l - 1);
  }
//   return Number.MAX_VALUE;
}

function partition(arr, l, r) {
  let x = arr[r];
  let i = l;
  for (let j = l; j <= r - 1; j++) {
    if (arr[j] <= x) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, r);
  return i;
}

let l = 0;
let k = 4;
let arr = [7, 10, 4, 3, 20, 15];
let r = arr.length-1;

console.log(kthSmallest(arr, l, r, k));
