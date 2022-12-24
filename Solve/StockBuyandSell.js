function stockBuySell(A, n) {
  let bought = A[0];
  let buyDay = 0;
  let ans = [];
  for (let i = 1; i < n; i++) {
    if (A[i] > bought) {
        bought = A[i];
    }else if (A[i]< bought) {
        if(buyDay<(i-1)){
            ans.push([buyDay, i-1]);
        }
        bought = A[i];
        buyDay = i;
    }
    if(i>=n-1){
        if(A[i]>A[buyDay]){
            ans.push([buyDay,i])
        }
    }
  }
  if(ans.length>=1){
      return ans;
  }
  return 'No Profit'
}

console.log(stockBuySell([4,3,2,1], 4));
