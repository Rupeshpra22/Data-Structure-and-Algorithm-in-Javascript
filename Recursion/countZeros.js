let num = 302040000;
let count = 0;

function countZero(num, count){
    if(num === 0){
        return count;
    }
    if(num%10===0){
        return countZero(Number.parseInt(num/10), count+1);
    }else{
        return countZero(Number.parseInt(num/10), count);
    }
}

console.log(countZero(num, count))