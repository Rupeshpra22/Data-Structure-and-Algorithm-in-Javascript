// 1295. Find Numbers with Even Number of Digits

var nums = [12,345,2,6,7896]

function evenNumber(nums){
    var count = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i].toString().length % 2 == 0){
            count+=1;
        }
    }

    return count;
}

console.log(evenNumber(nums))