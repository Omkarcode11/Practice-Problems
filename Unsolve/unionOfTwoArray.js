function doUnion(a, n, b=0, m=0) {
  // code here
  let list = new Object();
  let count = 0
  for (let i = 0; i < n; i++) {
    if (list[a[i]]) {
      list[a[i]]++;
    } else {
      list[a[i]] = 1;
    }
  }
  for (let j = 0; j < m; j++) {
    if(list[b[j]]){
        list[b[j]]++
    }else{
        list[b[j]] = 1
    }
  }

  for (const key in list) {
   count++
  }

  return count
}

console.log(doUnion([1,2,3,4,4,4],6,[1,5,2,5,23],5))