let s = "babad"
//Output: "bab"
//Explanation: "aba" is also a valid answer.
function isPalindrome(str){
    let i = 0
    let j = str.length-1
    while(i<j){
        if(str[i]==str[j]){
            i++
            j--
        }else{
            return false
        }
    }
    return true
}
// console.log(isPalindrome("okko"))
var longestPalindrome = function(s) {
    let longpalindrom = ''
    for (let i = 0; i < s.length; i++) {
        if(isPalindrome(s.slice(i))){
            longpalindrom = s.slice(i)
        }
    }
    return longpalindrom
    }
    console.log(longestPalindrome("omokar"))