// function inversionCount(arr,N){
//     let count = 0
//     for (let i = 0; i < N; i++) {
//             for (let j = i+1; j < N; j++) {
//                if(arr[i]>arr[j]){
//                 count++
//                }
//             }
//     }
//     return count
// }

class Solution {
  constructor() {
    this.switches = 1
}
 

  inversionCount(arr, N) {
    this.mergeSort(arr, 0, N - 1);

    return this.switches;
  }

  mergeSort(arr, start = 0, end = arr.length - 1) {
    if (arr.length == 1) return arr;
    let mid = Math.floor((start - end) / 2);
    let left = this.mergeSort(arr.slice(start, mid));
    let right = this.mergeSort(arr.slice(mid));
    return this.arraySort(left, right);
  }
  arraySort(arr1, arr2) {
    // let switches = 0;
    let i = 0;
    let il = arr1.length;
    let j = 0;
    let jl = arr2.length;
    let res = [];
    while (i < il && j < jl) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i]);
        i++;
    } else {
        res.push(arr2[j]);
        this.switches += 1
        j++;
      }
    }
    while (i < il) {
      res.push(arr1[i]);
      i++;
    }
    while (j < jl) {
      res.push(arr2[j]);
      j++;
    }
    return res;
  }
}

// inversionCount([3,2,1,6,5,4],6)
console.log(Solution.prototype.inversionCount([3, 2, 1, 6, 5, 4], 6));
