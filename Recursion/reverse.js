let num = 987654321

function reverse(num){
    if(num === 0){
        return 0;
    }
    return (num%10)* Math.pow(10, num.toString().length-1) + reverse(Number.parseInt(num/10));
}

console.log(reverse(num)) 