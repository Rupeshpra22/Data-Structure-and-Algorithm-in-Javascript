let arr = [1, 4, 7, 9, 10, 13, 17];
let searchElement = 17;

// let recursiveBinarySearch = (arr, low, high, searchElement) => {
//   if (low < high) {
//     let mid = (high + low) / 2;
//     if (searchElement === arr[mid]) {
//       return arr[mid];
//     }

//     if (searchElement < arr[mid]) {
//       return recursiveBinarySearch(arr, low, mid - 1, searchElement);
//     } else {
//      return recursiveBinarySearch(arr, mid + 1, high, searchElement);
//     }
//   }
//   return -1;
// };

// console.log(recursiveBinarySearch(arr, 0, arr.length - 1, searchElement));

let iterativeBinarySearch = (arr, searchElement) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + (high - low) / 2;
    if (arr[mid] === searchElement) {
      return arr[mid];
    }

    if (arr[mid] < searchElement) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

console.log(iterativeBinarySearch(arr, searchElement));
