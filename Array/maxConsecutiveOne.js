//Test Data
var arr = [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1]

maxConsecutiveOne = (arr) => {
    var count = 0;
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++;
        } else {
            result = Math.max(result, count);
            count = 0;
        }
    }
    return result;
}

console.log(maxConsecutiveOne(arr))