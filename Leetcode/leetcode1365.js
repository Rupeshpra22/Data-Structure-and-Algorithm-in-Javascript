var nums = [8, 1, 2, 2, 3]
var output = []
function checkGreaterElement(nums) {

    // Time Complexity: O(n^2)
    // var count = 0;
    // for(var i=0;i<nums.length;i++){
    //     for(var j=0;j<nums.length;j++){
    //         if(nums[i]>nums[j]){
    //             count++;
    //         }
    //     }
    //     output.push(count);
    //     count = 0;
    // }

    //Time Complexity: O(nlogn)
    var clonedNums = [...nums];
    var sortedNums = nums.sort((a, b) => { return a - b });
    for (var i = 0; i < nums.length; i++) {
        output.push(sortedNums.indexOf(clonedNums[i]));
    }
    return output;
}

console.log(checkGreaterElement(nums))