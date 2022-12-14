var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  let mapstr = {}
  let mapbol = {}
  for (let i = 0; i < s.length; i++) {
    let chr1 = s[i]
    let chr2 = t[i]
    if(mapstr[chr1]){
        if(mapstr[chr1]!=chr2) return false
    }else{
        if(mapbol[chr2]==true)return false
        mapstr[chr1] = chr2
    }
  }
  return true
};
let a = "baba"
let b = "badc"
console.log(isIsomorphic(a, b));

  //   let map1 = {};
  //   let map2 = {};
  //   let arr1 = []
  //   let arr2 = []
  //   for (let i = 0; i < s.length; i++) {
  //     if (map1[s[i]]) {
  //       map1[s[i]]++;
  //     } else {
  //       map1[s[i]] = 1;
  //     }
  //   }
  //   for (let i = 0; i < t.length; i++) {
  //     if (map2[t[i]]) {
  //       map2[t[i]]++;
  //     } else {
  //       map2[t[i]] = 1;
  //     }
  //   }
  //   for (const key in map1) {
  //     arr1.push(map1[key])
  // }
  // for (const key in map2) {
  //       arr2.push(map2[key])
  //   }
  // if(arr1.length!=arr2.length)return false
  // for (let i = 0; i < arr1.length; i++) {
  //     if(arr1[i]!=arr2[i])return false
  // }
  // return true

