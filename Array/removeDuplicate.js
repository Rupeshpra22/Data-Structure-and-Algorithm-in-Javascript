//Test Data
var arr = [10, 20, 20, 30, 30, 30, 30];
var temp = [];
var res = 1;
//Time Complexity : O(n)
//Space Complexity : O(n)
// removeDuplicate = (arr) =>{
//     temp[0] = arr[0];
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]!=temp[res-1]){
//             temp[res] = arr[i];
//             res++;
//         }
//     }
//     return temp;
// }

//Time Complexity: O(n)
//Space Complexity: O(1)
removeDuplicate = (arr) => {    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != arr[res - 1]) {
            arr[res] = arr[i];
            res++;
        }
    }
}

removeDuplicate(arr)

// for(var i=0;i<temp.length;i++){
//     console.log(temp[i])
// }

for(var i=0;i<res;i++){
    console.log(arr[i])
}