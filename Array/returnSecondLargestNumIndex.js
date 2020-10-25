//Test Data
var arr = [14,16,18,9,13]
// var arr = [10,10,10] //this should return -1

// Below Approach is O(n) with Multiple Iteration
// function getLargestNumberIndex(arr){
//     var res = 0;
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>arr[res]){
//             res = i;
//         }
//     }
//     return res;
// }

// function getSecondLargestNumberIndex(arr){
//     var largest = getLargestNumberIndex(arr)
//     var res = -1;
//     for(var i=0;i<arr.length;i++){
//         if(arr[largest] != arr[i]){
//             if(res == -1){
//                 res = i
//             }else if(arr[i]>arr[res]){
//                 res = i
//             }
//         }
//     }
//     return res;
// }

//Below Approach is O(n) but with single Iteration
function getSecondLargestNumberIndex(arr){
    var secondLargest = -1;
    var largest = 0;
    for(var i=1;i<arr.length;i++){
        if(arr[i]>arr[largest]){
            secondLargest = largest;
            largest = i;
        }else if(arr[i]!=arr[largest]){
            if(secondLargest==-1 || arr[i]>arr[secondLargest]){
                secondLargest = i
            }
        }
    }
    return arr[secondLargest];
}
console.log(getSecondLargestNumberIndex(arr));