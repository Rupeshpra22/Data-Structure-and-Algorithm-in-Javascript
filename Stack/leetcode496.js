let nums1 = [4,1,2]
let nums2 = [1,3,4,2]

let nextGreaterElement = (nums2) => {
//   let output = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] == nums2[j]) {
//         if (j == nums2.length - 1) {
//           output[i] = -1;
//         } else {
//           for (let k = j; k < nums2.length; k++) {
//             if (nums2[k] > nums2[j]) {
//               output[i] = nums2[k];
//               break;
//             }
//           }
//          if(!output[i]){
//              output[i] = -1;
//          }
//         }
//       }
//     }
//   }
//   return output;


let stack = [];
let output = [];
for(let i=nums2.length-1;i>=0;i--){
    while(stack.length!=0 && nums2[i]>=stack[stack.length-1]){
        stack.pop();
    }
    if(stack.length!=0){
        output[i] = stack[stack.length-1];
    }else{
        output[i] = -1;
    }
    stack.push(nums2[i]);
}
return output;
};


let ans = (nums1, nums2)=>{
    let arr = nextGreaterElement(nums2);
    let output = [];
    let obj = {}
    for(let i=0;i<arr.length;i++){
       obj[nums2[i]] = arr[i]
    }
    for(let j=0;j<nums1.length;j++){
        output[j] = obj[nums1[j]]
    }
    return output;
}
console.log(ans(nums1, nums2));
