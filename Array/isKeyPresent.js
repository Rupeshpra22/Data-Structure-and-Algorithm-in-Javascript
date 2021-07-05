let arr = [5, 8, 7, 12, 14, 3, 9];
let x = 8;
let k = 2;
let isPresent = false;

const isKeyPresent = (arr, x, k) => {
    let startIndex = 0;
    while (startIndex <= arr.length) {
        for (let i = startIndex; i < k; i++) {
            if (arr[i] === x) {
                isPresent = true;
                break;
            } else {
                isPresent = false;
            }
        }
        if (isPresent) {
            startIndex = startIndex + k;
            k = k + startIndex;
        } else {
            return isPresent;
        }
    }
    return isPresent;
}

const res = isKeyPresent(arr, x, k);
if (res === true) {
    console.log("YES")
} else {
    console.log("NO")
}