let num = 5;

function OnetoN(num){
    if(num === 0){
        return;
    }
    OnetoN(num-1);
    console.log(num);
}

OnetoN(num)