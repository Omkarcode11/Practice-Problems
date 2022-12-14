function sort012(arr, n) {
    let start = 0
    let end = n-1
    let i = 0
      while(i<=end) {
        if(arr[i]==0){
            let temp = arr[start]
            arr[start] = arr[i]
            arr[i] = temp
            i++
            start++
        }else if (arr[i]==2){
            let temp = arr[end]
            arr[end] = arr[i]
            arr[i] = temp
            end--
            i++
        }else{
            i++
        }
    }
    return arr
}

console.log(sort012([0, 2, 1, 2, 0], 5));
