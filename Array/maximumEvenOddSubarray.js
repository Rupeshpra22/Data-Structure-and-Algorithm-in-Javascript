//Test Data
var arr = [12, 5, 14, 5, 6, 3, 10]

maximumEvenOddSubArray = (arr) => {
    var res = 1;
    var count = 1;
    for (var i = 1; i < arr.length; i++) {
        if ((arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) || (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)) {
            count++;
            res = Math.max(res, count);
        } else {
            count = 1;
        }
    }
    return res;
}
console.log(maximumEvenOddSubArray(arr))