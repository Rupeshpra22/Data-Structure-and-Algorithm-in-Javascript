let nums = [2, 10, 12, 1, 11];

let nextGreaterElement = (nums) => {
  let stack = [];
  let nge = [];
  let n = nums.length;
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length != 0 && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }
    if (i < n) {
      if (stack.length != 0) {
        nge[i] = stack[stack.length - 1];
      } else {
        nge[i] = -1;
      }
    }
    stack.push(nums[i % n]);
  }
  return nge
};

console.log(nextGreaterElement(nums));
