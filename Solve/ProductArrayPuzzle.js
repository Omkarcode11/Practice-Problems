function productExceptSelf(nums, n) {
  //code here
  let left = new Array(n);
  let mul = 1;
  left[0] = 1;
  for (let i = 0; i < n - 1; i++) {
    left[i + 1] = left[i] * nums[i];
  }

  for (let i = n - 2; i >= 0; i--) {
    mul *= nums[i + 1];
    left[i] = left[i] * mul;
    
  }

  return left;
}

console.log(productExceptSelf([12,0], 2));

// left =  [1, 10, 30, 150, 900];
//        180   60    12     2    1
