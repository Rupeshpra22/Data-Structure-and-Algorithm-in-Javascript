//Recurrence Relation 
//T(n) = T(n-1) + n 
//Time complexity : O(n)

let n = 5;
let m = 4;
function power(n,m){
    if(m==0){
        return 1;
    }else{
        return power(n, m-1)*n
    }
}

console.log(power(n,m))

//We can improve the above algorithm by using distribute and conquer method.