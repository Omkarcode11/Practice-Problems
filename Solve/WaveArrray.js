function convertToWave(n,arr){
    if(n==1) return arr
    for (let i = 1; i < n; i+=2) {
        if(arr[i-1]<arr[i]){
            let temp = arr[i]
            arr[i]  =arr[i-1]
            arr[i-1] = temp
        }
    }
    return arr
}

console.log(convertToWave([2,4,7,8,9,10],6))