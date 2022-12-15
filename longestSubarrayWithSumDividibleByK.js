function longSubArrWithSumDivByk(arr,n,k){
let rightSum = []
let leftSum = []
let rSum = 0
let lSum = 0
for (let i = 0; i < n; i++) {
    rSum += arr[i]
    rightSum.push(rSum)
}
for (let i = n-1; i >= 0; i--) {
    lSum += arr[i]
    leftSum[n-i-1]=lSum
}
return [leftSum,rightSum]
}


console.log(longSubArrWithSumDivByk([-2,2,-5,12,-11,-1,7],7,3))