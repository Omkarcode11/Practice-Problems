var merge = function(nums1, m, nums2, n) {
    if(m==0)return nums2
    if(n==0)return nums1
    let i = m-1
    let j = n-1
    let l = (m+n)-1
    while(j>=0){
    if(nums1[i]>=nums2[j]){
        nums1[l] = nums1[i]
        i--
        l--
    }else{
        nums1[l] = nums2[j]
        j--
        l--
    }
    }
return nums1
};
console.log(merge([0],0,[1],1));