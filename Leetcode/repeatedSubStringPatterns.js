var repeatedSubstringPattern = function(s) {
    if(s.length%2!=0)return false
    let i = 0
    let j = 1
    let subStr = ''
    while(s[i]!=s[j]){
     if(subStr=='') subStr = s[i]   
    subStr += s[j]
    j++
    }
    while(j<s.length){
        if(s[i]!=s[j]){
            return false
        }
    i++
    j++
    }
    return true
};

console.log(repeatedSubstringPattern("abac"))