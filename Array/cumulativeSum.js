let arr = [1,2,3,4]

let cumulativeSum = (arr) => {
    let sum = arr[0];
    for(let i=1;i<arr.length;i++){
        sum = sum + arr[i];
        arr[i] = sum;
    }

    return arr;
}

console.log(cumulativeSum(arr))