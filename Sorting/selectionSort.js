//here we start with the given array, find the index of the smallest element
//swap it with the leftmost element of unsorted array.
//so with this we will be having sorted part of array and unsorted part of array with each iteration
//so again we will search for smallest element index in unsorted part and swap it with
//leftmost element of unsorted part.

//if the currentIndex and the smallest index is same then there is no need of swap

let arr = [3, 4, 1, 6, 2, 5];

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i != minIndex) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
};

console.log(selectionSort(arr));
