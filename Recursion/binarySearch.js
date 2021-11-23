let arr = [1,2,3,4,5]
let target = 8;
let start = 0;
let end = arr.length-1;
function binarySearch(arr, target, start, end){
    let mid = Math.floor((start+end)/2);
    if(start>end){
        return false;
    }
    if(arr[mid] === target){
        return true;
    }
    if(arr[mid]>target){
        return binarySearch(arr, target, start, mid-1);
    }else{
        return binarySearch(arr, target, mid+1, end);
    }
}

console.log(binarySearch(arr, target, start, end));