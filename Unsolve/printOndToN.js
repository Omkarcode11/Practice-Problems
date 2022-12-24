function print(n
    , i=1){
    if(i==n){
        return i
    }
    console.log(i)
    return i + print(i+1)
}



console.log(print(10))