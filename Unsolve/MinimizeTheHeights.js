function getMinDiff(arr,n,k){
       //code here
       arr.sort((a,b)=>a-b)
       let min = (arr[n-1]+k)-(arr[0]-k)
       let min1 = (arr[n-1]-k)-(arr[0]+k)
       if(min>0){
           min = min
       }else if (min1>0 && min>min1){
           min =min1
    }else if(min2>0 && min>min2){
        min = min2
    }else if(min3>0 && min>min3){
        min = min3
    }
    return min
    }



console.log(getMinDiff([2,6,3,4,7,2,10,3,2,1],10,5))