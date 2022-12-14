function isPalindrome(num){
    num = String(num)
    let s = 0
    let l = num.length-1
    while(s<=l){
        if(num[s]==num[l]){
            s++
            l--
        }else{
            return false
        }
    }
    return true
}

function checkPalindromeArray(array){
    for (let i = 0; i < array.length; i++) {
        let res = isPalindrome(array[i])
        if(res==false) return 0
    }
    return 1
}


console.log(checkPalindromeArray([11,232,44,555,656]));