let arr = [-1, 2, 3, 4, 6, 7, 8];

let negative = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > 0 && arr[mid - 1] < 0) {
      return mid;
    } else if (arr[mid] < 0 && arr[mid + 1] > 0) {
      return mid + 1;
    } else if (arr[mid] > 0) {
      high = mid - 1;
    } else if (arr[mid] < 0) {
      low = mid + 1;
    }
  }
  return 0;
};

console.log(negative(arr));
