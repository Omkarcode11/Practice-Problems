function printPat(n){
    //code here
    let val = ''
    for(let i = n ; i>0 ; i--){
        console.log(i)
        for(let j = i ; j<n ; j++){
            val += i
        }
        val += '\n'
    }
    return val
  }

console.log(printPat(5))