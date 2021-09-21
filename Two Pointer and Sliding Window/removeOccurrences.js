let arr = [1, 1, 1, 2, 2];
let key = 1;

function removeOccurences(A, k) {
  let i = 0;
  let j = 0;

  while (i < A.length) {
    if (A[i] != k) {
      A[j] = A[i];
      j++;
    }
    i++;
  }
  return j;
}

console.log(removeOccurences(arr, key));
