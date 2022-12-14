function leaders(a, n){
        let v=[];
    
        let max = a[n-1];
        
        //We start traversing the array from last element.
        for(let i =n-1; i >= 0; i--){
            
            //Comparing the current element with the maximum element stored. 
            //If current element is greater than max, we add the element.
            if(a[i] >= max){
                //Updating the maximum element.
                max = a[i];
                //Storing the current element.
                v.push(max);
            }
        }
        
        //Finally reversing the vector in which leaders are stored.
        v.reverse();
        //returning the answer.
        return v;
    }