strs = ["flower","flow","ight"]
strs1 = []
const longestCommonPrefix = function(strs) {
    let prefix = ' '
    if(strs.length === 0){
        return prefix
    }
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
    for (let j = 0; j < strs.length; j++) {
        if(strs[j][i]!== char){
            return prefix
        }    
    }
    prefix = prefix + char    
}

return char
    // define prefix

   }






console.log(longestCommonPrefix(strs))