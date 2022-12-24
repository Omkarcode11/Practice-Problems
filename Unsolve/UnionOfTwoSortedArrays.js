function findUnion(arr1, arr2, n, m) {
  //your code here
  let map = {};
  let i = 0;
  let j = 0;
  let count = 1
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      if (!map[arr1[i]]) {
        map[arr1[i]] = count;
        count++
        i++;
      } else {
        i++;
      }
    } else if (arr1[i] > arr2[j]) {
      if (!map[arr2[j]]) {
        map[arr2[j]] = count;
        count++
        j++;
      } else {
        j++;
      }
    } else if (arr1[i] == arr2[j]) {
      if (!map[arr1[i]]) {
        map[arr1[i]] = count;
        count++
        j++;
        i++;
      }
    }
  }

  while (i < n) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = count;
      count++
      i++;
    } else {
      i++;
    }
  }

  while (j < m) {
    if (!map[arr2[j]]) {
      map[arr2[j]] = count;
      j++;
      count++
    } else {
      j++;
    }
  }

  return map;
}

console.log(findUnion([2, 2, 3, 4, 5], [1, 1, 2, 3, 4], 5, 5));
