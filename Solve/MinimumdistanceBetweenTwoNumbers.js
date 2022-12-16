function minDist(a, n, x, y) {
  let xPos = -1;
  let yPos = -1;
  let arr = []
  for (let i = 0; i < n; i++) {
    if(a[i]==x){
        xPos = i+1
    }else if(a[i]==y){
        yPos = i+1
    }
    if((xPos>0) && (yPos>0)){
       arr.push(Math.abs(yPos - xPos));
    }
  }
  if(xPos<0 || yPos<0){
    return -1
  }
  return Math.min(...arr)
}


console.log(minDist([96, 82, 48, 76, 34, 19, 7, 80, 36, 57, 77, 34, 19, 35, 5, 57, 16, 66, 42, 62, 89, 19, 60, 19, 25, 16, 20, 51, 77, 75, 12, 73, 8, 11, 100, 93, 81, 58, 72, 17, 14, 48, 2, 33, 82, 6, 41, 49, 72, 34, 10, 12, 53, 21, 30, 77, 36, 49, 79, 13, 75, 42],62,36,33));