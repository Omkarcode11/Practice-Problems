var plusOne = function (digits) {
    digits = digits.join('')
    digits = BigInt(digits)
    console.log(digits)
    arr = digits.toString().split('')
    // return arr
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
