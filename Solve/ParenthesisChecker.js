function ispar(x) {
  let size = x.length;
  if (size % 2 != 0) return false;
  let stack = [];
  let sLength = 0;
  let par = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  for (let i = 0; i < size; i++) {
    if (x[i] == '{' || x[i] == '[' || x[i] == '(') {
      stack[sLength] = x[i];
      sLength++;
    } else {
      if (sLength == 0) return false;
      else if (x[i]) {
        if (par[x[i]] == stack[sLength-1]) {
          stack.length--;
          sLength--;
        }else{
            return false
        }
      }
    }
  }
  if (stack.length > 0) {
    return false;
  } else return true;
}

console.log(ispar('([])'));
