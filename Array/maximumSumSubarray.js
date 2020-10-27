//Test Data
var arr = [1, -2, 3, -1, 2]

//Time Complexity: O(n^2)
//Space Complexity:O(1)
// maximumSumSubarray = (arr) => {
//     var res = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         var curr = 0;
//         for (var j = i; j < arr.length; j++) {
//             curr = curr + arr[j];
//             res = Math.max(res, curr)
//         }
//     }
//     return res;
// }

maximumSumSubarray = (arr) =>{
    var res = arr[0];
    var maxSum = arr[0];
    for(var i=1;i<arr.length;i++){
        maxSum = Math.max(arr[i], maxSum+arr[i]);
        res = Math.max(res,maxSum)
    }
    return res;
}

console.log(maximumSumSubarray(arr))