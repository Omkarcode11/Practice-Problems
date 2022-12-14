function isAnagram(a, b)
    {
        //an array of size 26, to store count of characters.
        let freq = new Array(26);
        freq.fill(0);
        
        //storing count of each character in first string.
        for(let i = 0;i<a.length;i++){
            let k = a.charCodeAt(i)-97;
            freq[k]++;
        }
    
        //decrementing the count of characters encountered in the second string.
        for(let i = 0; i<b.length;i++){
            let k = b.charCodeAt(i)-97;
            freq[k]--;
        }
    
        let flag = true;
        
        //iterating over the array in which we stored the count initially 
        //to check if count at every index is equal to 0 or not.
        //count 0 indicates that number of characters in both strings are same.
        for(let i = 0;i<26;i++){
            if(freq[i] != 0){
                flag = false;
                break;
            }
        }
        //returning the result.
        return flag;
    }

console.log(isAnagram('s', 'f'));
