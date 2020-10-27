//Test Data
// var arr = [3, 5, 4, 2, 6, 5, 4, 8, 3]
// var arr = [2, 5, 3, 5, 4, 4, 2, 3]
// var arr = [86, 39, 90, 67, 84, 66, 62]
var arr = [98, 78, 10, 12, 59, 37, 45, 18, 1, 56, 37, 14, 3, 32, 85, 10, 69, 89, 29, 93, 44, 16, 26, 13, 50, 75, 79, 21, 20, 33, 55, 17, 63, 64, 80, 21, 52, 24, 90, 52, 80, 26, 18, 34, 57, 2, 95, 25, 42, 23, 17, 85, 39, 94, 50, 40, 21, 28, 12, 40, 61, 67, 9, 23, 30, 88, 95, 34, 64, 85, 85, 95, 62, 54, 28, 19, 55, 22, 95, 49, 97, 64, 33]
// var x = 3;
// var y = 2;
var x = 34;
var y = 56;
// var x = 42;
// var y = 12;

//Time Complexity: O(n)
//Space Complexity:O(1)
findIndex = (num) => {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            index = i;
            break;
        }
    }
    return index;
}
maximumDistanceBetweenTwoNumber = (arr) => {
    var xIndex = -1;
    var yIndex = -1;
    var res = Number.MAX_VALUE
    var isXPresent = findIndex(x);
    var isYPresent = findIndex(y);
    if (isXPresent == -1 || isYPresent == -1) {
        return -1;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === x) {
                xIndex = i
            }
            if (arr[i] === y) {
                yIndex = i
            }

            if (xIndex >= 0 && yIndex >= 0) {
                res = Math.min(res, Math.abs(yIndex - xIndex))
            }

        }
    }
    return res;
}

console.log(maximumDistanceBetweenTwoNumber(arr))