function wealthyCustomer(accounts, m, n) {
  //write your logic here
  let arr = [];
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    arr.push(sum);
  }

  let max = arr[0];
  let position = 0;
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] > max) {
      max = arr[k];
      position = k;
    }
  }

  return position+1;
}

let accounts = [
  [2, 3],
  [1, 1, 4],
  [2, 2, 3],
];
console.log(wealthyCustomer(accounts, 3, 2));
// Sample Input 3
// 2 3
// 1 2 3
// 3 2 1
// Sample Output 3
// 1
