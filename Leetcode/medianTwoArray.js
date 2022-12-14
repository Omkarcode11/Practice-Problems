var findMedianSortedArrays = function(nums1, nums2) {
    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i])
    }
    // console.log(nums1)
    if(nums1.length%2==0){
        return (nums1[nums1.length/2]+nums1[(nums1.length/2)-1])/2
    }else{
        return nums1[Math.floor(nums1.length/2)]
    }
//  console.log(nums1)
};
// nums1 = , nums2 = [2]
console.log(findMedianSortedArrays([1,8],[1]))