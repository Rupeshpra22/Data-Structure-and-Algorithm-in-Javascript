let arr = [1,1,0,2,0,2]

const dutch = (arr) =>{
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while(mid<=high){
        if(arr[mid] == 0){
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }else if(arr[mid] == 1){
            mid++;
        }else{
            let temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] = temp;
            high--;
        }
    }
    return arr;
}

console.log(dutch(arr))