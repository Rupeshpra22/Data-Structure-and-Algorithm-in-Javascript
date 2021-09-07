// Array: [1, 2, 3, 2, 1]
// Number of Identical Twins: 2
// Explanation:
// Identical Twins: [[1, 1], [2, 2]]
// Indexes: (0, 4), (1, 3)

let arr = [1, 2, 2, 3, 2, 1]

//Time complexity : O(n^2)
let identicalTwins = (arr) =>{
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(identicalTwins(arr));
