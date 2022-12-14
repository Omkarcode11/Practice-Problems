var removeElement = function(nums, val) {
    let res = nums.length
    let list = []
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]==val){
            res--
        }else{
            list.push(nums[i])
        }
    }
    return [res,list]
};
console.log(removeElement([3,2,2,3]))