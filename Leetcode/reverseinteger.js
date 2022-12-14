var reverse = function(x) {
let res = ''
 if(x<0){
    res += "-"
    x = String(x)
    for (let i = x.length-1; i > 0; i--) {
        res += x[i]
    }
 }else {
    x = String(x)
    for (let i = x.length-1; i >= 0; i--) {
        res += x[i]
    }
    if(Number(res)<Math.pow(-2,31)||Number(res)>Math.pow(2,31)-1) return 0
 }
 return res
};
console.log(reverse(1534236469))