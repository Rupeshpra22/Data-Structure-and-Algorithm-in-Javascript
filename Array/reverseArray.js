//Test Data
var arr = [1, 2, 3, 4, 5, 6];

// Time Complexity : O(n)
// Space Complexity : O(1)
reverseArray = (arr) => {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}
reverseArray(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}