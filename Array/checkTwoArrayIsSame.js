//Test Data
var arr1 = [1, 2, 3, 4, 5]
var arr2 = [2, 4, 3, 6, 1]

//Time Complexity: O(n)
//This approach will work when there is some distinct elements in array, wont work if we have same kind of elements in the arrys
isTwoArraySame = (arr1, arr2) => {
    var xorOfarr1 = arr1[0];
    var xorOfarr2 = arr2[0];

    for(var i=1;i<arr1.length;i++){
        xorOfarr1=xorOfarr1^arr1[i]
    }

    for(var i=1;i<arr2.length;i++){
        xorOfarr2=xorOfarr2^arr2[i]
    }

    var isBothSame = xorOfarr1^xorOfarr2
    if(isBothSame == 0){
        return true;
    }else{
        return false;
    }

}

console.log(isTwoArraySame(arr1, arr2))