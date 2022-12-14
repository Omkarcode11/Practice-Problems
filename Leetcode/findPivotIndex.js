var pivotIndex = function(nums) {
    const record = new Array(nums.length) 
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        record[i] = sum
        sum += nums[i]
    }
    sum = 0
    for (let i = nums.length-1; i >= 0; i--) {
        record[i] -= sum
        sum += nums[i]
    }
    for (let i = 0; i < nums.length; i ++) {
        if (record[i] === 0)
            return i
    }
    return -1
};

console.log(pivotIndex([1,7,3,6,5,6]))