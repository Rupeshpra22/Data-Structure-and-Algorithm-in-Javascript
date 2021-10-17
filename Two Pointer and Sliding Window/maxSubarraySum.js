let arr = [3, 5, 6, 2, 4, 7, 8]
let k = 3;

const maximumSubArray = (arr, k) =>{
    let curr_sum = 0;
    let max_sum = 0;
    for(let i=0;i<k;i++){
        curr_sum = curr_sum + arr[i];
    }
    max_sum = Math.max(max_sum, curr_sum);

    for(let j=k;j<arr.length;j++){
        curr_sum = curr_sum + arr[j] - arr[j - k];
        max_sum = Math.max(max_sum, curr_sum);
    }
    return max_sum
}

console.log(maximumSubArray(arr,k))