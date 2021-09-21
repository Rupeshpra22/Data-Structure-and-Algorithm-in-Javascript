//Given a sorted array, check if there exist two numbers whose sum is zero.

let arr = [-3, 1, 2, 4];

let existTwoSum = (arr) =>{
    let i = 0;
    let j = arr.length - 1;
    while(i<j){
        if(arr[i]+arr[j]>0){
            j--;
        }else if(arr[i]+arr[j]<0){
            i++
        }else{
            return true
        }
    }

    return false;
}

console.log(existTwoSum(arr))