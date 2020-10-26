//Test Data
// var arr = [7, 9, 5, 6, 17, 4]
var arr = [2, 3, 10, 6, 4, 8, 1]

//Time Complexity: O(n^2)
//Space Complexity: O(1)
// maxDifference = (arr) => {
//     var maxDiff = arr[1] - arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             maxDiff = Math.max(maxDiff, arr[j] - arr[i])
//         }
//     }
//     return maxDiff;
// }

//Time Complexity: O(n)
//Space Complexity: O(1)
maxDifference = (arr) => {
    var maxDiff = arr[1] - arr[0];
    var minElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
        maxDiff = Math.max(maxDiff, arr[i] - minElement);
        minElement = Math.min(minElement, arr[i])
    }
    return maxDiff
}

console.log(maxDifference(arr));
