let num = 5;

function Nto1(num){
    if(num === 0){
        return;
    }
    console.log(num);
    Nto1(num-1);
}

Nto1(num);