var nums =[-1,-1,-1,0,1,1]
// function findSum(nums, first, last) {
//     var sum = 0;
//     for (var i = first; i <= last; i++) {
//         sum += nums[i]
//     }

//     return sum;
// }

function pivot(nums) {
    // var numLength = nums.length;
    // var leftSectionSum = 0;
    // var rightSectionSum = -1;
    // var mid = Math.floor((0 + numLength) / 2);
    // leftSectionSum = findSum(nums, 0, mid - 1);
    // rightSectionSum = findSum(nums, mid + 1, numLength - 1);
    // while (mid != 0 && mid != numLength - 1) {
    //     if (leftSectionSum != rightSectionSum) {
    //         if (leftSectionSum > rightSectionSum) {
    //             mid = mid + 1;
    //         } else {
    //             mid = mid - 1;
    //         }
    //         leftSectionSum = findSum(nums, 0, mid);
    //         rightSectionSum = findSum(nums, mid, numLength - 1);
    //     } else {
    //         return mid;
    //     }
    // }
    // return -1;
    var output = -1;
    var prefixRightSum = new Array(nums.length);
    prefixRightSum[0] = nums[0];
    var left = nums[nums.length - 1];
    var prefixLeftSum = new Array(nums.length);
    prefixLeftSum[nums.length - 1] = nums[nums.length - 1]
    var right = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        var right = right + nums[i];
        prefixRightSum[i] = right;
    }

    for (var i = nums.length - 2; i >=0; i--) {
        var left = left + nums[i];
        prefixLeftSum[i] = left;
    }

    for(var z=0;z<nums.length;z++){
        if(prefixLeftSum[z] == prefixRightSum[z]){
            output = z;
            break;
        }
    }

    return output;
}

console.log(pivot(nums))