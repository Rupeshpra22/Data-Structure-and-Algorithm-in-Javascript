let arr = [1,2,3,5]
let num = 6
let insertPosition = (arr, num) => {
    let low = 0;
    let high = arr.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === num){
            return mid;
        }else if(num < arr[mid]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return high+1;
}

console.log(insertPosition(arr, num))