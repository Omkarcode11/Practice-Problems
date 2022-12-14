//Given an array having 2 halves already sorted your task is to sort it
// let arr= [1,4,5,3,6]
function halfarray(arr){
    let mid = Math.floor(arr.length/2)
    let arr1 =  arr.slice(0,mid)
    let arr2 = arr.slice(mid)
    return [arr1,arr2]
}
// console.log(halfarray(arr))
function sortArray(arr2){
    let arr = halfarray(arr2)
    let result = []
    let i = 0
    let j =0 
    while(i<arr[0].length && j<arr[1].length){
        if(arr[0][i]<=arr[1][j]){
            result.push(arr[0][i])
            i++
        }else{
            result.push(arr[1][j])
            j++
    }
}
    while(i<arr[0].length){
        result.push(arr[0][i])
        i++
    }
    while(j<arr[1].length){
        result.push(arr[1][j])
        j++
    }
return result
}

console.log(sortArray([1,4,3,6]));