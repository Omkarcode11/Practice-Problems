function maximumSumSubarray(K, Arr, N) {
  if (N == 1) return Arr[0];
  if (K == N) {
    let totalSum = 0;
    for (let i = 0; i < N; i++) {
      totalSum += Arr[i];
    }
    return totalSum;
  }
  let arrSum = 0;
  let i = 0;
  let j = i + 1;
  let sum = Arr[i];
  while (j != K) {
    sum += Arr[j];
    j++;
  }
 arrSum = sum

  while (i < N - K) {
    sum -= Arr[i];
    i++;
    sum += Arr[j];
    j++;
    if(sum>arrSum){
        arrSum = sum
    }
  }
  return arrSum;
}

console.log(maximumSumSubarray(3, [100, 200, 300, 400], 4));
