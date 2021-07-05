let arr = [1, 2, 3, 4, 5];

const swap = (arr, first, last) => {
    while (first < last) {
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
}

const rotateByOne = (arr) => {
    swap(arr, 0, arr.length - 2)
    swap(arr, 0, arr.length - 1)
    return arr;
}

console.log(rotateByOne(arr));
