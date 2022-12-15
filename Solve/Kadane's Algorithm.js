function maxSubarraySum(arr, N) {
  let maxSum = 0
  let curSum = 0
 for (let i = 0; i < N; i++) {
     curSum += arr[i]
     if(curSum>maxSum){
        maxSum = curSum
     }
    
     if(curSum<0){
        curSum =0
     }
 }
 return maxSum
}

let N = 9;
let arr = [-2,  1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubarraySum(arr, N));
