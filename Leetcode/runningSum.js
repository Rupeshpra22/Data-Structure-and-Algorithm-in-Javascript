// 1480. Running Sum of 1d Array

var nums = [1,1,1,1,1,1];

function runningSum(nums){
    var sum = 0;
    for(var i=0;i<nums.length;i++){
        sum = sum + nums[i];
        nums[i] = sum;
    }
    return nums;
}

runningSum(nums);

for(var j=0;j<nums.length;j++){
    console.log(nums[j]);
}