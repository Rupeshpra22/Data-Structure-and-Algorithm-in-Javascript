let arr = [1,1,2,2,3,3,4,5,6,7];

let arr2 = [0, 9, 2, 3, 4, 8, 7]

const nonRepeating = (arr) =>{
    let hash = {};
    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]]!== undefined){
            hash[arr[i]]+=1
        }else{
            hash[arr[i]] = 1
        }
    }
    return hash
}

console.log(nonRepeating(arr2));
let hashedValue = nonRepeating(arr2);

//to count non repeating element
let count = 0;
for(let value in hashedValue){
    if(hashedValue[value] == 1){
       count++;
    }
}
console.log(count)

//to print non repeating element
// for(let j=0;j<arr2.length;j++){
//     if(hashedValue[arr2[j]]==1){
//         console.log(arr2[j])
//     }
// }
