function arraySort(arr1,arr2){
    let result = []
    let i = 0
    let j = 0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
            }
        }
    
        while(i<arr1.length){
            result.push(arr1[i])
            i++
        }
        while(j<arr2.length){
            result.push(arr2[j])
            j++
        }
        return result
}
function findMedianTwoarrays(nums1, nums2) {
    let result1 = arraySort(nums1,nums2)
   
if(result1.length%2==0){
        let mid = result1.length/2
        let mid2 = mid-1
        return ((result1[mid]+result1[mid2])/2)
    }else{
        let mid = Math.floor(result1.length/2)
      return result1[mid]
    }
};
// nums1 = , nums2 = [2]
console.log(findMedianTwoarrays([1,8],[9]))
// console.log(arraySort([1,8],[1,2]))