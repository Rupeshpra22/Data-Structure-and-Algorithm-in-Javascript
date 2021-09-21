let arr = [4, 5, 3, 1, 2];
let searchElement = 1;

let linearSearch = (arr) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] === searchElement){
            return arr[i];
        }
    }
    return -1;
}

console.log(linearSearch(arr, searchElement))