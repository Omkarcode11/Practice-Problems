function nonrepeatingCharacter(s) {
  // code here
  let n = s.length
  let map = {}
  for (let i = 0; i < n ; i++) {
    if(map[s[i]]){
        map[s[i]]++
    }else{
        map[s[i]]=1
    }
  }

  for (let i = 0; i < n; i++) {
    if(map[s[i]]==1){
        return s[i]
    }
  }
  return -1
}


console.log(nonrepeatingCharacter("hellow"));