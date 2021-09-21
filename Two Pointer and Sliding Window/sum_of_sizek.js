//Given a array of size n and a number k, return the sum of all subarray of size k

let arr = [3, 5, 6, 2, 4, 7, 8];
let k = 3;

//Quadratic Solution
// let maximumOfSize = (arr, k) => {
//   let output = [];
//   let sum = 0;
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     for (let j = i; j < k + i; j++) {
//       sum += arr[j];
//     }
//     output.push(sum);
//     sum = 0;
//   }
//   return output;
// };

//To improve above solution we will use sliding window technique


let maximumOfSize = (arr, k) =>{
    let output = [];
    let sum = 0;
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    output.push(sum);

    for(let j=k;j<arr.length;j++){
        sum = sum + arr[j] - arr[j - k];
        output.push(sum);
    }

    return output;
}

console.log(maximumOfSize(arr, k));
