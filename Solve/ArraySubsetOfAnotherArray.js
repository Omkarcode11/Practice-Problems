function isSubset(a1,a2,n,m){
    let map = {}
   for (let i = 0; i < n; i++) {
    if(map[a1[i]]){
        map[a1[i]]++
    }else{
        map[a1[i]] = 1
    }
   }
   for (let i = 0; i < m; i++) {
      if(map[a2[i]]){
        map[a2[i]]--
      }else{
        return "No"
      }
   }
   return "Yes"
}

let a1 =[10, 5, 2, 23, 19]
let a2 = [19, 5, 3]

console.log(isSubset(a1,a2,5,3));