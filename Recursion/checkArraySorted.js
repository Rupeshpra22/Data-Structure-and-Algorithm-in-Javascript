let arr = [1,2,8,4,5,6]

function isArraySorted(arr){
    return helper(arr, 0);

    function helper(arr, index){

        if(index===arr.length-1){
            return true;
        }
         if(arr[index]<arr[index+1]){
            return helper(arr.splice(1), index)
        }else{
            return false;
        }
    }
}

console.log(isArraySorted(arr))