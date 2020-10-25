//Test Data
var arr = [10, 35, 20, 8];


//Time Complexity: O(n^2)
//Space Complexity: O(1)
// function getLargestNumberIndex(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var flag = true;
//         for (var j = 0; j < arr.length; j++) {
//             if(arr[i]<arr[j]){
//                 flag = false;
//                 break
//             }
//         }
//         if(flag === true){
//             return i;
//         }
//     }
// }

//Time Complexity: O(n)
//Space Complexity: O(1)
function getLargestNumberIndex(arr){
    var res = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>arr[res]){
            res = i;
        }
    }
    return res;
}


console.log(getLargestNumberIndex(arr))