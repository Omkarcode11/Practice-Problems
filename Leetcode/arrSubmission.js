var runningSum = function(nums) {
    let res = []
        for(let i = 0 ; i<nums.length ;i++){
        let sum = 0
        for(let j = 0 ; j<=i ; j++){
        sum += nums[j]
        }
        res.push(sum)
    }
    return res}


    console.log(runningSum([1,2,3,4]))