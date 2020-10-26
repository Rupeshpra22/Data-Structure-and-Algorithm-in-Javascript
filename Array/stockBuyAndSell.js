//Test Data
var arr = [1,5,3,8,12]


//Time Complexity: O(n)
//Space Complexity; O(1)
maxProfit = (arr) =>{
    var profit = 0;
    for(var i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            profit = profit + (arr[i]-arr[i-1])
        }
    }
    return profit;
}

console.log(maxProfit(arr))