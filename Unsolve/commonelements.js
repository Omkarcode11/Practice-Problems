function commonElements(arr1, arr2, arr3, n1, n2, n3) {
 let map1 = {}
 let map2 = {}
 let map3 = {}
 let arr = []
 let com = 0
 for (let i = 0; i < n1; i++) {
    if(map1[arr1[i]]){
        map1[arr1[i]]++
    }else{
        map1[arr1[i]] = 1
    }
}
for (let i = 0; i < n2; i++) {
    if(map2[arr2[i]]){
        map2[arr2[i]]++
    }else{
        map2[arr2[i]] = 1
    }
}
for (let i = 0; i < n3; i++) {
    if(map3[arr3[i]]){
        map3[arr3[i]]++
    }else{
        map3[arr3[i]] = 1
    }
 }

for (let i = 0; i < n1; i++) {
    if(arr1[i]!=com && map1[arr1[i]] && map2[arr1[i]] && map3[arr1[i]]){
        arr.push(arr1[i])
        com = arr1[i]
    }
}
return arr
}

let n1 = 6;
let A = [1, 5, 10, 20, 40, 80];
let n2 = 5;
let B = [6, 7, 20, 80, 100];
let n3 = 8;
let C = [3, 4, 15, 20, 30, 70, 80, 120];

console.log(commonElements(A,B,C,n1,n2,n3));
