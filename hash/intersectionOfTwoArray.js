// let a = [89, 24, 75, 11, 23]
// let b = [89, 2, 4]

//Output: 1

let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3, 4, 5]

// let a = [1, 1, 2, 2, 3, 3]
// let b = [8, 9, 7, 6, 5]

// let a = [1, 2, 3, 4, 5, 6]
// let b = [3, 4, 5, 6, 7]

// Output: 4

// let a = [4,4] 
// let b = [1, 4, 2, 3, 5, 4]

let hash = {}
const intersection = (a) =>{
    for(let i=0;i<a.length;i++){
        if(hash[a[i]]!==undefined){
            hash[a[i]]+=1
        }else{
            hash[a[i]] = 1
        }
    }
    return hash
}

console.log(intersection(a, hash));

let count = 0;
for(let j=0;j<b.length;j++){
    if(hash[b[j]]!==undefined){
        count++;
        delete hash[b[j]];
    }
}

console.log(count)









































