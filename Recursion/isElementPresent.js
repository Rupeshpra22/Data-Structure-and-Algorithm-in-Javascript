let arr = [1,4,7,11,2];
let target = 9;
let index = 0;
function isElementPresent(arr, target, index){

    if(index>arr.length){
        return false;
    }
    if(arr[index] === target){
        return true;
    }else{
        return isElementPresent(arr, target, index+1)
    }
}
console.log(isElementPresent(arr, target,index))