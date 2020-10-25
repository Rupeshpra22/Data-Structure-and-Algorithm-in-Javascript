//Test Data
var arr = [20, 10, 15];

// Time Complexity : O(n)
// Space Complexity : O(1)
isArraySorted = (arr) => {
    var flag = true;
    if (arr.length == 1) {
        return "YES"
    } else {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
        return "YES"
    } else {
        return "NO"
    }
}

console.log(isArraySorted(arr))