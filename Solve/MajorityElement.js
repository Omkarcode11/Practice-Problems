function majorityElement(a,size){
    let map = {}
    let max = 0
    let num = a[0]
    for (let i = 0; i < size; i++) {
        if(map[a[i]]){
            map[a[i]]++
        }else{
            map[a[i]]=1
        }
    }

   for (const key in map) {
        if(map[key]>max){
            max = map[key]
            num = key
        }
    }
    if(max>(size/2)){
        return num
    }else {
        return -1
    }
   }


   console.log(majorityElement([3,1,2],3))