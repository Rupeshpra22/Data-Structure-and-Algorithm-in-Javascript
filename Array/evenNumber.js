// Array: [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]
// Answer: 42, 5775, 34, 45, 3556

let arr = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442];

let evenNumber = (arr) =>{
    let output = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].toString().length%2==0){
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(evenNumber(arr))