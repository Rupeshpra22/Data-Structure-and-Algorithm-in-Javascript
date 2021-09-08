//here we are selecting last element of an array as the pivot
let arr = [20, 2, 9, 7, 12, 15, 1, 6, 8];

let partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
};

let quickSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }
  let pivot = partition(arr, low, high);
  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
  return arr;
};

console.log(quickSort(arr, 0, arr.length - 1));

