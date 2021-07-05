let arr = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// output = 2;

let arr1 = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// output = 1


let firstRecurringElement = (arr) => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            return arr[i];
        } else {
            map[arr[i]] = i
        }
    }
    return undefined;
}

console.log(firstRecurringElement(arr))