var strStr = function(haystack, needle) {
    let res= 0
    for(let i = 0 ; i < haystack.length ; i++){
        if(haystack[i]==needle[0]){
         res = i
        for(let j = 0 ; j < needle.length ; j++){
            if(haystack[j+i]!=needle[j]){
                res = -1
                break
            }
            if(j==needle.length-1 && haystack[j+i]==needle[j]){
                return res = i
            }
        }
        }
    }
 return res
 };
 console.log(strStr("hello","ll"))