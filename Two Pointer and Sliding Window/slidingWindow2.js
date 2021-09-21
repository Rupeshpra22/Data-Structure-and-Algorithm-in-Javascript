//Given an array and number k, check whether if there is a subarray of size k with given sum

let arr = [3, 5, 6, 2, 4, 7, 8];
let k = 3;
let reqSum = 67;

let slidingWindow2 = (arr, k, sum) =>{
    let isPresent = false;
    let curr_sum = 0;
    for(let i=0;i<k;i++){
        curr_sum+=arr[i];
    }

    if(curr_sum === sum){
        isPresent = true;
        return isPresent;
    }

    for(let j=k;j<arr.length;j++){
        curr_sum = curr_sum + arr[j] - arr[j - k];
        if(curr_sum === sum){
            isPresent = true;
            return isPresent;
        }
    }

    return isPresent;
}

console.log(slidingWindow2(arr, k, reqSum))