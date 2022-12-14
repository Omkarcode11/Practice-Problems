var mergeTwoLists = function(list1, list2) {
    let maxli = (list1.length<list2.length)?list2:list1
    result = []
   for (let i = 0; i < maxli.length; i++) {
        result.push(list1[i])
        result.push(list2[i])
   } 
  return result
};
let arr1 = [1,2,4] 
let arr2 = [1,3,4]

mergeTwoLists(arr1,arr2)