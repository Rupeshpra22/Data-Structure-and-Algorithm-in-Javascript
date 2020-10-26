//Test Data
var arr = [1, 2, 3, 4, 5];
var d = 2;

//Time Complexity: O(n^2)
//Space Complexity:O(1)
// leftRotateByDElement = (arr) => {
//     var temp = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         arr[i - 1] = arr[i]
//     }
//     arr[arr.length-1] = temp
// }

// for (var i = 0; i < d; i++) {
//     leftRotateByDElement(arr)
// }

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
reverse = (left, right, arr) => {
    while (left  <= right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
leftRotateByDElement = (arr) => {
    reverse(0, d-1, arr);
    reverse(d,arr.length-1, arr);
    reverse(0, arr.length-1,arr);
}

leftRotateByDElement(arr)

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}