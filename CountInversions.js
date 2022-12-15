function inversionCount(arr,N){
    let count = 0
    for (let i = 0; i <N; i++) {
        if(arr[i]>arr[i+1]){
            count++
        }        
    }
    return count
}


console.log(inversionCount([2,4,1,3,5],5));