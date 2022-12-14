function maxSubarraySum(arr, N) {
    let sum = 0
    for (let i = 0; i < N; i++) {
        sum += arr[i]
    }
    let start = 0
    let end = n-1
    let maxSum = []
    while (start<=end) {
        sum = 
        if((sum-arr[start])>sum){
            maxSum = [start,end]
            start++
        }else if((sum-arr[end])>sum){
            maxSum = [start,end]
            end--
        }
    }
    return maxSum
}


let N = 5;
let arr = [-1, -2, 3, -2, -5];

console.log(maxSubarraySum(arr, N));
