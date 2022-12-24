function isRotated(str1,str2){
    let n = str1.length
    let flag = true
// for anticlockwise
for (let i = 0; i < 2; i++) {
    str1 += str1[i]
    str1 = str1.slice(i)
}
  str1 = str1.slice(1)
  if(str1==str2){
    return true
  }
  //for clockwise
  let str = str1.slice(n-4,n)
   str1 = str+str1


    //   str1[i] += str[i]
    //   str1 = str1.slice(i)
    str1 = str1.slice(0,n)
    if(str1==str2){
      return true
    }
  return false
}



console.log(isRotated('fsbcnuvqhffbsaqxwp',
'wpfsbcnuvqhffbsaqx'));