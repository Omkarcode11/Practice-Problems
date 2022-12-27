function knapSack(W, wt, val, n) {
  let i, w;
  let K = new Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    K[i] = new Array(W + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
        if(i==0 || w==0){
            K[i][w] = 0
        }
        else if (wt[i-1] <= w){
            K[i][w] = Math.max(val[i-1]+K[i-1][w-wt[i-1]],K[i-1][w])
        }else{
            K[i][w] = K[i-1][w]
        }
    }
  }
  return K[n][W]
}

let n = 4;
let W = 10;
let val = [10, 40, 30, 50];
let wt = [5, 4, 6, 3];

console.table(knapSack(W, wt, val, n));
