function print(arr,n){
    //code here
    let val = []
    for(let i = 0 ; i<n ; i=i+2){
        val.push(arr[i])
    }
    return val
  }

console.log(print([1,2,3,4,5],5))