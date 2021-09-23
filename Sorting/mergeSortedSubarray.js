let arr = [1, 3, 5, 7, 9, 11, 0, 4, 6, 8];
let endIndex = 6;

const mergeSortedSubarray = (arr, endIndex) => {
  let A = new Array(endIndex);
  let B = new Array(arr.length - endIndex);

  for (let i = 0; i < A.length; i++) {
    A[i] = arr[i];
  }

  for (let j = 0; j < B.length; j++) {
    B[j] = arr[A.length + j];
  }

  let a = 0;
  let b = 0;
  let k = 0;
  while (a < A.length && b < B.length) {
    if (A[a] < B[b]) {
      arr[k] = A[a];
      a++;
      k++;
    } else {
      arr[k] = B[b];
      b++;
      k++;
    }
  }

  while (a < A.length) {
    arr[k] = A[a];
    a++;
    k++;
  }

  while (b < B.length) {
    arr[k] = B[b];
    b++;
    k++;
  }

  return arr;
};

console.log(mergeSortedSubarray(arr, endIndex));
