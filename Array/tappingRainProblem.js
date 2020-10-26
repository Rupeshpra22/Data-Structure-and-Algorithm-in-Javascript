//Test Data
// var arr = [1, 5, 3, 8, 15];
var arr = [5, 0, 6, 2, 3]
maxTapWater = (arr) => {
    var lmax = [];
    var rmax = [];
    var n = arr.length;
    var output = 0;
    lmax[0] = arr[0];
    for (var i = 1; i < n; i++) {
        lmax[i] = Math.max(lmax[i - 1], arr[i])
    }

    rmax[n - 1] = arr[n - 1];
    for (var i = n - 2; i >= 0; i--) {
        rmax[i] = Math.max(rmax[i + 1], arr[i])
    }

    for (var i = 1; i < n - 1; i++) {
        output = output + (Math.min(lmax[i], rmax[i]) - arr[i]);
    }
    return output;
}

console.log(maxTapWater(arr))