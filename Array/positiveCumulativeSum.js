//In this problem we need to return only positive cumulative sum
// Eg:
// Initial Array: [1, -2, 3, 4, -6]
// Cumulative Sum: [1, -1, 2, 6, 0]
// Positive Cumulative Sum: [1, 2, 6]

let arr = [1, -2, 3, 4, -6]

let positiveCumulativeSum = (arr) =>{
    let sum = 0;
    let output = [];
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
        if(sum>0 && sum>-1){
            output.push(sum);
        }
    }
    return output;
}

console.log(positiveCumulativeSum(arr))