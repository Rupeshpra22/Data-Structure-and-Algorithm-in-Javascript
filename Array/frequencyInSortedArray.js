var arr = [10, 10, 10, 20, 20, 30, 30, 30, 30]

frequencyInSortedArray = (arr) => {
    var i = 1;
    var frequency = 1;
    var n = arr.length;
    while (i <= n) {
        while (i < n && arr[i] == arr[i - 1]) {
            i++;
            frequency++;
        }
        console.log(arr[i - 1] + " " + frequency);
        i++;
        frequency = 1;
    }
}

frequencyInSortedArray(arr)