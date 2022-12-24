function allPairs(A, B, N, M, X) {
  //code here
  let map = {};
  let vector = [];
  A.sort((a, b) => a - b);
  for (let i = 0; i < M; i++) {
    if (map[B[i]]) {
      map[B[i]]++;
    } else {
      map[B[i]] = 1;
    }
  }
  for (let i = 0; i < N; i++) {
    let sum = X - A[i];
    if (map[sum] && A[i] < sum) {
      vector.push([A[i], sum]);
    }
  }
  return vector;
}

let A = [1, 2, 4, 5, 7];
let N = 5;
let B = [5, 6, 3, 4, 8];
let M = 5;
let X = 9;

console.log(allPairs(A, B, N, M, X));
