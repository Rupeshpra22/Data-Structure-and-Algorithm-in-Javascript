let arr = [2,5,1,2,3,5,1,2,4]

let arr1 = [2,1,1,2,3,5,1,2,4]

let occurence = (arr) =>{
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

console.log(occurence(arr))