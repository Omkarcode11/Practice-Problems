function equilibriumPoint(a, n) {
  //your code here
  if(n==1)return 1
  if(n==2)return -1
  let arrSum  = []
  let maxSum = 0
  for (let i = 0; i < n; i++) {
    maxSum += a[i]
    arrSum.push(maxSum)
  }
  for (let i = 1; i < n-1; i++) {
    let right = arrSum[i]-a[i]
    let left = maxSum-arrSum[i]
    if(right==left){
        return i+1
    }
  }
  return -1
}



console.log(equilibriumPoint([1],1))