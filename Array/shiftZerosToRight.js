//Test Data
var arr = [12, 0, 5, 0, 0, 4];

//Time Complexity: O(n^2)
//Space Complexity: O(1)
// shiftZerosToRight = (arr) =>{
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             for(var j=i+1;j<arr.length;j++){
//                 if(arr[j]!=0){
//                     var temp = arr[i];
//                     arr[i] = arr[j];
//                     arr[j] = temp;
//                     break;
//                 }                
//             }
//         }
//     }
// }

//Time Complexity: O(n)
//Space Complexity: O(1)
shiftZerosToRight = (arr) => {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            var temp = arr[i];
            arr[i] = arr[count];
            arr[count] = temp;
            count++;
        }
    }
}
shiftZerosToRight(arr);

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
