let num = 27;

let perfectSqaure = (num) =>{
    let low = 0;
    let high = num;
    while(low<=high){
        let mid = Math.floor((low + high)/2);
        if(mid*mid === num){
            return true;
        }

        if(mid*mid>num){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return false
}

console.log(perfectSqaure(num))