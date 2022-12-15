function transitionPoint(arr,n){
    if(n==1 && arr[0]==0)return -1
    if(n==1 && arr[0]==1)return 0
    let count = -1
    for (let i = 0; i < n-1; i++) {
        if(arr[i]==1){
            count = 0
        }
        if(arr[i]!=arr[i+1]){
            return i+1
        }
    }
    return count
}



console.log(transitionPoint([1],1));