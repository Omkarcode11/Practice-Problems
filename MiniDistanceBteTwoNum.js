function minDist(a, n, x, y) {
  let count = 0;
  let posX = -1;
  let posJ = -1;
  let minDist = n;
  for (let i = 0; i < n; i++) {
    if (a[i] == x) {
      posX = i;
    } else if (a[i] == y) {
      posJ = i;
    }
    if (a[posX]==x && a[posJ]==y) {
      if (posJ-posX < minDist ) {
        minDist = posJ - posX;
      }
    }
  }
  if(a[posX]==x && a[posJ]==x){
      return minDist
  }
  return -1
}


console.log(minDist([1,2,3,2],4,1,2))