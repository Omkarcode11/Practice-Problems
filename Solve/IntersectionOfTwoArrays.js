function NumberofElementsInIntersection(a, b, n, m) {
  let map = {};
  let count = 0
  let res = new Set()
    for (let i = 0; i < n; i++) {
      if (map[a[i]]) {
        map[a[i]]++;
      } else {
        map[a[i]] = 1;
      }
    }

    for (let i = 0; i < m; i++) {
       if(map[b[i]]){
        map[b[i]]--
       res.add(b[i])
       }
    }
    return res.size
}

n = 6
m = 5
a = [1, 2, 3, 4, 5, 6, 6]
b = [3, 4, 5, 6, 7]
console.log(NumberofElementsInIntersection(a,b,n,m));