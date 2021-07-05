let arr = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// output = 2;

let arr1 = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// output = 1

let arr2 = [2, 5, 5, 2, 3, 5, 1, 2, 4]
//output = 2

let firstRecurringElement = (arr) => {
    let map = {};
    for(let i = 0;i<arr.length;i++){
        if(map[arr[i]]!== undefined){
            map[arr[i]] += 1;
        }else{
            map[arr[i]] = 1
        }
    }
    return map
}

let elementCount = firstRecurringElement(arr1)
for(let i=0;i<arr1.length;i++){
    let num = arr1[i];
    if(elementCount[num]>1){
        console.log(num)
        return;
    }
}