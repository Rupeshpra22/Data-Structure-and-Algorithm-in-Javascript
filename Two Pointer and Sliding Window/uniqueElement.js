let arr = [1, 2, 3, 3, 3, 4, 5, 5];
// let arr = [1,1,1,2,2]
// let arr = [1,1,1,1,2,3,4]
const uniqueElement = (arr) =>{
    let output = 1;
    let i = 0;
    let j = 1;
    let flag = 0;
    while(j<=arr.length - 1){
        if(arr[i]!=arr[j]){
            if(flag == 1){
                output++;
                 i=j;
                 j = j+1;
                 flag = 0;
            }else{
            output++;
            i++;
            j++;
            }
        }else{
            j++;
            flag = 1;
        }
    }
    return output;
}

console.log(uniqueElement(arr))