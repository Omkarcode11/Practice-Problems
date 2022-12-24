function findKRotation(arr,n) {
        // code here 
        let count = 0
        for (let i = 0; i < n; i++) {
          if(arr[i]>arr[i+1]){
            return ++count
          }
          if(arr[i]<arr[i+1]){
            count++
          }
        }
        if(count==(n-1)){
            return 0
        }
        // return count
    }


// console.log(findKRotation([66, 67, 7, 10, 14, 19, 27, 33, 36, 40, 44, 54, 60],13));
console.log(findKRotation([5, 6, 7, 10, 14],5));