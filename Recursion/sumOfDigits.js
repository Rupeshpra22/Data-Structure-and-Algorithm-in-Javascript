let num = 1342;

function sumOfDigit(num){
    if(num === 0){
        return 0;
    }
    return num%10 + sumOfDigit(Number.parseInt(num/10));
}

console.log(sumOfDigit(num));