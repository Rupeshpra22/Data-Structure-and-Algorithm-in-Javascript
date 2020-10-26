//Test Data
var arr = [7, 10, 4, 10, 6, 5, 2]

//Time Complexity: O(n^2)
//Space Complexity: O(1)
// leadersInArray = (arr) =>{
//     for(var i=0;i<arr.length;i++){
//         var flag = false;
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]<=arr[j]){
//                 flag = true;
//                 break
//             }
//         }
//         if(flag == false){
//             console.log(arr[i])
//         }
//     }
// }

leadersInArray = (arr) =>{
    var curr = arr[arr.length-1];
    console.log(curr)
    for(var i=arr.length-2;i>=0;i--){
        if(arr[i]>arr[curr]){
            console.log(arr[i])
            curr = arr[i];
            
        }
    }
}
leadersInArray(arr)